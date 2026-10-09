import { createFileRoute } from "@tanstack/react-router"
import { useSession, signIn, signOut } from "better-auth/react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { toast } from "sonner"

export const Route = createFileRoute("/admin")({
  component: AdminPage,
})

type Product = {
  id: string
  name_ar: string
  name_en: string
  category: string
  price: number
  compare_at: number | null
  image: string
  is_new: boolean
}

const categories = [
  { slug: "women", name: "حريمي" },
  { slug: "men", name: "رجالي" },
  { slug: "kids", name: "أطفال" },
]

const emptyForm = {
  id: "",
  name_ar: "",
  name_en: "",
  category: "women",
  price: "",
  compare_at: "",
  image: "",
  is_new: true,
}

function AdminPage() {
  const { data: session } = useSession()
  const queryClient = useQueryClient()
  const [form, setForm] = useState(emptyForm)

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("/api/products")
      return res.json() as Promise<Product[]>
    },
    enabled: !!session?.user?.isAdmin,
  })

  const saveMutation = useMutation({
    mutationFn: async (data: typeof emptyForm) => {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: data.id || undefined,
          name_ar: data.name_ar,
          name_en: data.name_en,
          category: data.category,
          price: Number(data.price),
          compare_at: data.compare_at ? Number(data.compare_at) : null,
          image: data.image,
          is_new: data.is_new,
        }),
      })
      if (!res.ok) throw new Error()
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] })
      setForm(emptyForm)
      toast("تم الحفظ")
    },
    onError: () => toast("فشل الحفظ"),
  })

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/products?id=${id}`, { method: "DELETE" })
      if (!res.ok) throw new Error()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] })
      toast("تم الحذف")
    },
  })

  const uploadImage = async (file: File) => {
    const formData = new FormData()
    formData.append("file", file)
    const res = await fetch("/api/upload", { method: "POST", body: formData })
    const { url } = await res.json()
    return url
  }

  if (!session?.user) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="w-full max-w-sm rounded-2xl border bg-white p-8 text-center shadow">
          <h1 className="text-3xl font-bold">لوحة تحكم أسيل</h1>
          <p className="mt-2 text-gray-600">سجل دخول الأدمن</p>
          <button
            onClick={() => signIn("google", { callbackURL: "/admin" })}
            className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-3 text-white hover:bg-blue-700"
          >
            متابعة عبر Google
          </button>
        </div>
      </div>
    )
  }

  if (!session.user.isAdmin) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">ليست لديك صلاحية</h1>
          <p className="mt-2 text-gray-600">الأدمن فقط: mesholover35@gmail.com</p>
          <button onClick={() => signOut()} className="mt-4 text-blue-600">تسجيل خروج</button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center
