import { betterAuth } from "better-auth"
import { Pool } from "pg"
import { getSql } from "@/lib/db"

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

export const auth = betterAuth({
  database: pool,
  socialProviders: {
    google: { 
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  callbacks: {
    async signIn({ user }) {
      // لو ده الأدمن، ضيفه لجدول store_admins تلقائي أول مرة
      if (user.email === process.env.ADMIN_EMAIL) {
        const sql = await getSql()
        await sql`insert into store_admins (user_id) values (${user.id}) on conflict do nothing`
      }
      return true
    },
    async session({ session, user }) {
      const sql = await getSql()
      const admin = await sql`select 1 from store_admins where user_id = ${user.id}`
      return {
      ...session,
        user: {...session.user, isAdmin: admin.length > 0 }
      }
    }
  }
})
