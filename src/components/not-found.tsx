import { Link } from "@tanstack/react-router";
import { BrandPicture } from "@/components/picture";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <BrandPicture src="/brand/not-found" alt="404 — عذراً.. العطر اللي بتدور عليه مش هنا" className="rounded-[24px] border border-gold/30" priority />
      <div className="mt-8 flex justify-center">
        <Button variant="gold" size="lg" asChild>
          <Link to="/">ارجع للرئيسية</Link>
        </Button>
      </div>
    </section>
  );
}
