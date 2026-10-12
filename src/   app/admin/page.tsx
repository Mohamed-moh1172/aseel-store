import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import AdminDashboard from "./AdminDashboard";

const prisma = new PrismaClient();

export default async function AdminPage() {
  const session = await auth.api.getSession({ headers: headers() });
  
  if (!session || session.user.email!== process.env.ADMIN_EMAIL) {
    redirect("/api/auth/signin");
  }

  const products = await prisma.product.findMany({ 
    orderBy: { createdAt: 'desc' } 
  });
  
  const config = await prisma.siteConfig.findUnique({ 
    where: { id: "config" } 
  });

  async function createProduct(formData: FormData) {
    "use server";
    await prisma.product.create({
      data: {
        name: formData.get("name") as string,
        price: parseFloat(formData.get("price") as string),
        image: formData.get("image") as string,
        category: formData.get("category") as string,
      },
    });
    revalidatePath("/admin");
  }

  async function updateProduct(id: string, formData: FormData) {
    "use server";
    await prisma.product.update({
      where: { id },
      data: {
        name: formData.get("name") as string,
        price: parseFloat(formData.get("price") as string),
        image: formData.get("image") as string,
        category: formData.get("category") as string,
      },
    });
    revalidatePath("/admin");
  }

  async function deleteProduct(id: string) {
    "use server";
    await prisma.product.delete({ where: { id } });
    revalidatePath("/admin");
  }

  async function updateContacts(formData: FormData) {
    "use server";
    await prisma.siteConfig.upsert({
      where: { id: "config" },
      update: {
        whatsapp: formData.get("whatsapp") as string,
        telegram: formData.get("telegram") as string,
        instagram: formData.get("instagram") as string,
        phone: formData.get("phone") as string,
      },
      create: {
        id: "config",
        whatsapp: formData.get("whatsapp") as string,
        telegram: formData.get("telegram") as string,
        instagram: formData.get("instagram") as string,
        phone: formData.get("phone") as string,
      },
    });
    revalidatePath("/admin");
  }

  return (
    <AdminDashboard 
      products={products} 
      config={config}
      createProduct={createProduct}
      updateProduct={updateProduct}
      deleteProduct={deleteProduct}
      updateContacts={updateContacts}
    />
  );
}
