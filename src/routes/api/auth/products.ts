import { createServerFileRoute } from "@tanstack/start/server"
import { getSql } from "@/lib/db"
import { auth } from "@/server/auth"
import { nanoid } from "nanoid"

export const ServerRoute = createServerFileRoute("/api/products").methods({
  GET: async () => {
    const sql = await getSql()
    const products = await sql`select id, name_ar, name_en, category, price, compare_at, image, is_new from products order by created_at desc`
    return Response.json(products)
  },
  
  POST: async ({ request }) => {
    const session = await auth.api.getSession({ headers: request.headers })
    if (!session?.user?.isAdmin) return new Response("Unauthorized", { status: 401 })
    
    const data = await request.json()
    const sql = await getSql()
    const id = data.id || nanoid()
    
    await sql`
      insert into products (id, name_ar, name_en, category, price, compare_at, image, is_new, blurb, description, details)
      values (${id}, ${data.name_ar}, ${data.name_en}, ${data.category}, ${data.price}, ${data.compare_at}, ${data.image}, ${data.is_new}, ${data.name_ar}, ${data.name_ar}, '[]')
      on conflict (id) do update set
        name_ar = ${data.name_ar},
        name_en = ${data.name_en},
        category = ${data.category},
        price = ${data.price},
        compare_at = ${data.compare_at},
        image = ${data.image},
        is_new = ${data.is_new}
    `
    return Response.json({ id })
  },
  
  DELETE: async ({ request }) => {
    const session = await auth.api.getSession({ headers: request.headers })
    if (!session?.user?.isAdmin) return new Response("Unauthorized", { status: 401 })
    
    const url = new URL(request.url)
    const id = url.searchParams.get("id")
    const sql = await getSql()
    await sql`delete from products where id = ${id}`
    return Response.json({ success: true })
  },
})
