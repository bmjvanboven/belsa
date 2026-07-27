import type { ReactNode } from "react";

type Tone = "neutral" | "primary" | "dark" | "success" | "error" | "warning" | "info";

const tones: Record<Tone, string> = {
  neutral: "bg-gray-100 text-fg-secondary",
  primary: "bg-primary text-fg-on-yellow",
  dark: "bg-black-900 text-white",
  success: "bg-success-bg text-success-fg",
  error: "bg-error-bg text-error-fg",
  warning: "bg-warning-bg text-warning-fg",
  info: "bg-info-bg text-info-fg",
};

export function Badge({
  tone = "neutral",
  children,
  className,
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 font-body font-bold text-xs px-3 py-1 rounded-pill",
        tones[tone],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
