import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "8MB", maxFileCount: 5 } })
  .middleware(async () => {
      const session = await auth.api.getSession({ headers: headers() });
      if (!session || session.user.email!== process.env.ADMIN_EMAIL) throw new Error("Unauthorized");
      return { userId: session.user.id };
    })
  .onUploadComplete(async ({ file }) => {
      return { url: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
