import { forwardRef } from "react";
import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "tertiary" | "ghost" | "outline-dark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center gap-2 font-display font-bold rounded-pill border-2 no-underline cursor-pointer transition-colors duration-150 ease-out disabled:opacity-50 disabled:cursor-not-allowed";

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-7 py-[15px] text-lg",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-fg-on-yellow border-transparent shadow-sm hover:bg-primary-hover active:bg-primary-active",
  secondary:
    "bg-black-900 text-white border-transparent hover:bg-black-800 active:bg-black-950",
  tertiary:
    "bg-transparent text-fg-primary border-border-strong hover:border-black-900",
  ghost: "bg-transparent text-fg-primary border-transparent hover:bg-gray-100",
  "outline-dark": "bg-transparent text-fg-primary border-black-900 hover:bg-black-900/10",
};

function classes(variant: Variant, size: Size, className?: string) {
  return [base, sizes[size], variants[variant], className].filter(Boolean).join(" ");
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", iconLeft, iconRight, children, className, ...rest },
    ref
  ) {
    const cls = classes(variant, size, className);

    if ("href" in rest && rest.href) {
      const { href, ...anchorRest } = rest as ButtonAsLink;
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cls}
          {...anchorRest}
        >
          {iconLeft}
          {children}
          {iconRight}
        </Link>
      );
    }

    const { type = "button", ...buttonRest } = rest as ButtonAsButton;
    return (
      <button
        type={type}
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cls}
        {...buttonRest}
      >
        {iconLeft}
        {children}
        {iconRight}
      </button>
    );
  }
);
