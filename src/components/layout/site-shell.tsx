import { type ReactNode, useEffect } from "react";
import { Toaster } from "sonner";
import { CartDrawer } from "@/components/cart-drawer";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { SearchDialog } from "@/components/search-dialog";
import { setLiveProducts } from "@/lib/catalog";
import { listProducts } from "@/lib/products";

export function SiteShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    void listProducts().then(setLiveProducts);
  }, []);
  return (
    <div className="flex min-h-svh flex-col bg-cream text-ink">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsappFloat />
      <CartDrawer />
      <SearchDialog />
      <Toaster dir="rtl" position="top-center" richColors={false} />
    </div>
  );
}
