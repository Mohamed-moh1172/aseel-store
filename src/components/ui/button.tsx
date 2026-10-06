import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[transform,background-color,color,box-shadow,border-color] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        gold: "gold-frame px-6 py-2.5 text-forest hover:bg-cream-deep",
        solid:
          "bg-forest text-cream hover:bg-forest-deep border border-forest-deep",
        ghost: "text-forest hover:bg-cream-deep",
        outline: "border border-gold/70 text-forest hover:bg-cream-deep bg-transparent",
      },
      size: {
        sm: "h-10 px-4 text-sm rounded-[10px]",
        md: "h-11 px-5 text-sm rounded-[12px]",
        lg: "h-12 px-7 text-base rounded-[14px]",
        icon: "size-11 rounded-full",
      },
    },
    defaultVariants: { variant: "gold", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
