import { createServerFileRoute } from "@tanstack/start/server"
import { v2 as cloudinary } from "cloudinary"
import { auth } from "@/server/auth"

cloudinary.config({ secure: true })

export const ServerRoute = createServerFileRoute("/api/upload").methods({
  POST: async ({ request }) => {
    const session = await auth.api.getSession({ headers: request.headers })
    if (!session?.user?.isAdmin) return new Response("Unauthorized", { status: 401 })

    const formData = await request.formData()
    const file = formData.get("file") as File
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const res = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({ folder: "aseel-store" }, (err, result) => {
        if (err) reject(err)
        else resolve(result)
      }).end(buffer)
    })

    return Response.json({ url: (res as any).secure_url })
  }
})
