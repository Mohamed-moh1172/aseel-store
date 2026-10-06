import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { SignInGate } from "@/lib/auth/gates";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "دخول الأدمن | أسيل ASEEL" }] }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <div className="rounded-[24px] border border-gold/40 bg-ivory p-8 text-center">
        <p className="font-english tracking-[0.22em] text-gold-deep">ASEEL ADMIN</p>
        <h1 className="mt-2 font-display text-4xl text-forest">لوحة التحكم</h1>
        <p className="mt-3 text-sm text-muted">سجّل دخولك لإضافة وتعديل وحذف المنتجات. أول حساب يسجّل يصبح أدمن المتجر.</p>
        <SignInGate
          fallback={
            <div className="mt-8 space-y-3">
              {authEnabled ? (
                GROK_PROVIDERS.map((p) => (
                  <Button
                    key={p.providerId}
                    type="button"
                    variant="solid"
                    className="w-full"
                    onClick={() => signIn(p.providerId, { callbackURL: "/admin" })}
                  >
                    متابعة عبر {p.label}
                  </Button>
                ))
              ) : (
                <p className="text-sm text-muted">تسجيل الدخول غير مفعّل حالياً.</p>
              )}
            </div>
          }
        >
          <Button className="mt-8 w-full" variant="solid" asChild>
            <Link to="/admin">دخول لوحة التحكم</Link>
          </Button>
        </SignInGate>
      </div>
    </div>
  );
}
