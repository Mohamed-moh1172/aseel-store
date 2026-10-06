import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  watermark?: boolean;
  priority?: boolean;
};

export function BrandPicture({ src, alt, className, imgClassName, watermark = false, priority = false }: Props) {
  const isDirect =
    src.startsWith("data:") ||
    src.startsWith("blob:") ||
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    /\.(png|svg)$/i.test(src);
  const base = src.replace(/\.(webp|jpg|jpeg|png|svg)$/i, "");

  return (
    <div className={cn("relative overflow-hidden bg-cream-deep", className)}>
      {isDirect ? (
        <img
          src={src}
          alt={alt}
          className={cn("h-full w-full object-cover", imgClassName)}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      ) : (
        <picture>
          <source type="image/webp" srcSet={`${base}.webp`} />
          <img
            src={`${base}.jpg`}
            alt={alt}
            className={cn("h-full w-full object-cover", imgClassName)}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
          />
        </picture>
      )}
      {watermark ? (
        <img
          src="/brand/logo-mark.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute bottom-[8%] left-[8%] w-[18%] max-w-24 select-none opacity-[0.15]"
        />
      ) : null}
    </div>
  );
}
