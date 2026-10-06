import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BRAND } from "@/lib/brand";
import { getProduct, type Product } from "@/lib/catalog";

export type CartLine = { id: string; qty: number };

export type OrderPayload = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  city: string;
  address: string;
  notes: string;
  payment: string;
  email: string;
  items: { id: string; nameAr: string; qty: number; price: number }[];
  subtotal: number;
  shipping: number;
  total: number;
};

type CartState = {
  items: CartLine[];
  drawerOpen: boolean;
  searchOpen: boolean;
  lastOrder: OrderPayload | null;
  add: (id: string, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  setDrawer: (open: boolean) => void;
  setSearch: (open: boolean) => void;
  placeOrder: (input: Omit<OrderPayload, "id" | "createdAt" | "items" | "subtotal" | "shipping" | "total">) => OrderPayload;
};

function totals(items: CartLine[]) {
  const subtotal = items.reduce((sum, line) => {
    const product = getProduct(line.id);
    return sum + (product ? product.price * line.qty : 0);
  }, 0);
  const shipping = subtotal >= BRAND.freeShippingMin || subtotal === 0 ? 0 : BRAND.shippingFee;
  return { subtotal, shipping, total: subtotal + shipping };
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      drawerOpen: false,
      searchOpen: false,
      lastOrder: null,
      add: (id, qty = 1) => {
        const items = [...get().items];
        const existing = items.find((i) => i.id === id);
        if (existing) existing.qty += qty;
        else items.push({ id, qty });
        set({ items, drawerOpen: true });
      },
      remove: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
      setQty: (id, qty) => {
        if (qty < 1) {
          set({ items: get().items.filter((i) => i.id !== id) });
          return;
        }
        set({
          items: get().items.map((i) => (i.id === id ? { ...i, qty } : i)),
        });
      },
      clear: () => set({ items: [] }),
      setDrawer: (open) => set({ drawerOpen: open }),
      setSearch: (open) => set({ searchOpen: open }),
      placeOrder: (input) => {
        const items = get().items;
        const { subtotal, shipping, total } = totals(items);
        const order: OrderPayload = {
          ...input,
          id: `ASEEL-${Date.now().toString(36).toUpperCase()}`,
          createdAt: new Date().toISOString(),
          items: items
            .map((line) => {
              const product = getProduct(line.id);
              if (!product) return null;
              return { id: product.id, nameAr: product.nameAr, qty: line.qty, price: product.price };
            })
            .filter(Boolean) as OrderPayload["items"],
          subtotal,
          shipping,
          total,
        };
        set({ lastOrder: order, items: [], drawerOpen: false });
        return order;
      },
    }),
    {
      name: "aseel-store",
      partialize: (state) => ({ items: state.items, lastOrder: state.lastOrder }),
    },
  ),
);

export function useHasHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}

export function cartCount(items: CartLine[]) {
  return items.reduce((n, i) => n + i.qty, 0);
}

export function cartTotals(items: CartLine[]) {
  return totals(items);
}

export function resolveLines(items: CartLine[]): { product: Product; qty: number }[] {
  return items
    .map((line) => {
      const product = getProduct(line.id);
      return product ? { product, qty: line.qty } : null;
    })
    .filter(Boolean) as { product: Product; qty: number }[];
}

export function orderWhatsAppText(order: OrderPayload) {
  const lines = order.items.map((i) => `• ${i.nameAr} × ${i.qty} = ${i.price * i.qty} ج.م`).join("\n");
  return `طلب جديد من أسيل ASEEL
رقم الطلب: ${order.id}
الاسم: ${order.name}
الهاتف: ${order.phone}
المدينة: ${order.city}
العنوان: ${order.address}
الدفع: ${order.payment}
${order.notes ? `ملاحظات: ${order.notes}\n` : ""}
المنتجات:
${lines}

المجموع: ${order.subtotal} ج.م
الشحن: ${order.shipping === 0 ? "مجاني" : `${order.shipping} ج.م`}
الإجمالي: ${order.total} ج.م`;
}
