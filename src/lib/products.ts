import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { authMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";
import { seedProducts, setLiveProducts, type CategorySlug, type Product } from "@/lib/catalog";

const categories = ["women", "men", "gold-plated", "stainless"] as const;

type ProductRow = {
  id: string;
  name_ar: string;
  name_en: string;
  category: string;
  price: number;
  compare_at: number | null;
  image: string;
  gallery: string;
  blurb: string;
  description: string;
  details: string;
  is_new: boolean;
  badge: string | null;
};

function parseList(value: string | unknown): string[] {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value !== "string" || !value.trim()) return [];
  try {
    const parsed = JSON.parse(value) as unknown;
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return [];
  }
}

function mapRow(row: ProductRow): Product {
  return {
    id: row.id,
    nameAr: row.name_ar,
    nameEn: row.name_en,
    category: row.category as CategorySlug,
    price: Number(row.price),
    compareAt: row.compare_at == null ? undefined : Number(row.compare_at),
    image: row.image,
    gallery: parseList(row.gallery),
    blurb: row.blurb,
    description: row.description,
    details: parseList(row.details),
    isNew: Boolean(row.is_new),
    badge: row.badge ?? undefined,
  };
}

async function seedIfEmpty() {
  const sql = await getSql();
  const existing = await sql<{ n: number }>`select count(*)::int as n from products`;
  if ((existing[0]?.n ?? 0) > 0) return;
  for (const product of seedProducts) {
    await sql`
      insert into products (id, name_ar, name_en, category, price, compare_at, image, gallery, blurb, description, details, is_new, badge)
      values (
        ${product.id},
        ${product.nameAr},
        ${product.nameEn},
        ${product.category},
        ${product.price},
        ${product.compareAt ?? null},
        ${product.image},
        ${JSON.stringify(product.gallery)},
        ${product.blurb},
        ${product.description},
        ${JSON.stringify(product.details)},
        ${product.isNew ?? false},
        ${product.badge ?? null}
      )
    `;
  }
}

async function loadAll(): Promise<Product[]> {
  await seedIfEmpty();
  const sql = await getSql();
  const rows = await sql<ProductRow>`select * from products order by created_at desc`;
  const items = rows.map(mapRow);
  setLiveProducts(items);
  return items;
}

export const listProducts = createServerFn({ method: "GET" }).handler(async () => loadAll());

async function requireStoreAdmin(userId: string) {
  const sql = await getSql();
  const admins = await sql<{ user_id: string }>`select user_id from store_admins`;
  if (admins.length === 0) {
    await sql`insert into store_admins (user_id) values (${userId})`;
    return { ok: true as const, claimed: true };
  }
  if (admins.some((row) => row.user_id === userId)) return { ok: true as const, claimed: false };
  return { ok: false as const, claimed: false };
}

export const ensureAdmin = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => requireStoreAdmin(context.userId));

const productInput = z.object({
  id: z.string().optional(),
  nameAr: z.string().min(2),
  nameEn: z.string().min(2),
  category: z.enum(categories),
  price: z.number().int().positive(),
  compareAt: z.number().int().positive().optional(),
  image: z.string().min(1),
  blurb: z.string().min(1),
  description: z.string().min(1),
  details: z.array(z.string()),
  isNew: z.boolean(),
  badge: z.string().optional(),
});

export const saveProduct = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator(productInput)
  .handler(async ({ data, context }) => {
    const access = await requireStoreAdmin(context.userId);
    if (!access.ok) throw new Error("FORBIDDEN");
    const sql = await getSql();
    const id = data.id?.trim() || `${data.category}-${Date.now().toString(36)}`;
    const gallery = JSON.stringify([data.image]);
    const details = JSON.stringify(data.details.filter((d) => d.trim()));
    await sql`
      insert into products (id, name_ar, name_en, category, price, compare_at, image, gallery, blurb, description, details, is_new, badge)
      values (
        ${id},
        ${data.nameAr},
        ${data.nameEn},
        ${data.category},
        ${data.price},
        ${data.compareAt ?? null},
        ${data.image},
        ${gallery},
        ${data.blurb},
        ${data.description},
        ${details},
        ${data.isNew},
        ${data.badge || null}
      )
      on conflict (id) do update set
        name_ar = excluded.name_ar,
        name_en = excluded.name_en,
        category = excluded.category,
        price = excluded.price,
        compare_at = excluded.compare_at,
        image = excluded.image,
        gallery = excluded.gallery,
        blurb = excluded.blurb,
        description = excluded.description,
        details = excluded.details,
        is_new = excluded.is_new,
        badge = excluded.badge
    `;
    return loadAll();
  });

export const deleteProduct = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator(z.object({ id: z.string().min(1) }))
  .handler(async ({ data, context }) => {
    const access = await requireStoreAdmin(context.userId);
    if (!access.ok) throw new Error("FORBIDDEN");
    const sql = await getSql();
    await sql`delete from products where id = ${data.id}`;
    return loadAll();
  });
