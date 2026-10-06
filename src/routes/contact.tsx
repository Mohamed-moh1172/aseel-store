import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { BrandPicture } from "@/components/picture";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { BRAND, waLink } from "@/lib/brand";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا | أسيل ASEEL" },
      { name: "description", content: `تواصل مع أسيل عبر واتساب ${BRAND.phoneDisplay}` },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <BrandPicture src="/brand/contact" alt={`تواصل معنا — واتساب ${BRAND.phoneDisplay}`} className="rounded-[24px] border border-gold/30" priority />
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl">تواصل معنا</h1>
          <p className="mt-2 text-muted">نحن هنا لخدمتك</p>
          <a href={BRAND.whatsappUrl} className="mt-4 block text-2xl text-forest" dir="ltr">
            {BRAND.phoneDisplay}
          </a>
          <Button className="mt-4" variant="solid" asChild>
            <a href={BRAND.whatsappUrl} target="_blank" rel="noreferrer">
              راسلنا واتساب
            </a>
          </Button>
        </div>
        <form
          className="space-y-3 rounded-[20px] border border-gold/30 bg-ivory p-5"
          onSubmit={(e) => {
            e.preventDefault();
            if (!name.trim() || !message.trim()) {
              toast("اكتب اسمك ورسالتك");
              return;
            }
            window.open(waLink(`رسالة من ${name}: ${message}`), "_blank", "noopener,noreferrer");
          }}
        >
          <label className="block text-sm">
            الاسم
            <Input className="mt-1" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label className="block text-sm">
            الرسالة
            <Textarea className="mt-1" value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
          <Button type="submit" variant="solid" className="w-full">
            إرسال عبر واتساب
          </Button>
        </form>
      </div>
    </div>
  );
}
