import type { ReactNode } from "react";
import Image from "next/image";

export function Card({
  image,
  eyebrow,
  title,
  children,
  footer,
  variant = "default",
  className,
}: {
  image?: string;
  eyebrow?: string;
  title?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  variant?: "default" | "dark";
  className?: string;
}) {
  const dark = variant === "dark";
  return (
    <div
      className={[
        "flex flex-col overflow-hidden rounded-lg shadow-md border",
        dark
          ? "bg-black-900 text-white border-border-on-dark"
          : "bg-surface-card border-border-default",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {image && (
        <div className="relative h-40 w-full bg-gray-100">
          <Image src={image} alt="" fill className="object-cover" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 p-5">
        {eyebrow && (
          <span className="font-display font-bold text-xs uppercase tracking-wide text-primary-active">
            {eyebrow}
          </span>
        )}
        {title && <h3 className="text-xl">{title}</h3>}
        {children && (
          <div className={["text-sm flex-1", dark ? "text-white/75" : "text-fg-secondary"].join(" ")}>
            {children}
          </div>
        )}
      </div>
      {footer && (
        <div
          className={[
            "px-5 py-3.5 border-t",
            dark ? "border-border-on-dark" : "border-border-default",
          ].join(" ")}
        >
          {footer}
        </div>
      )}
    </div>
  );
}
