import type { ReactNode } from "react";

type Tone = "success" | "error" | "warning" | "info";

const tones: Record<Tone, { bg: string; fg: string; icon: string }> = {
  success: { bg: "bg-success-bg", fg: "text-success-fg", icon: "✓" },
  error: { bg: "bg-error-bg", fg: "text-error-fg", icon: "✕" },
  warning: { bg: "bg-warning-bg", fg: "text-warning-fg", icon: "!" },
  info: { bg: "bg-info-bg", fg: "text-info-fg", icon: "i" },
};

export function Alert({
  tone = "info",
  title,
  children,
}: {
  tone?: Tone;
  title?: string;
  children: ReactNode;
}) {
  const t = tones[tone];
  return (
    <div className={["flex gap-3 rounded-md p-4 font-body", t.bg].join(" ")}>
      <span
        className={[
          "flex h-[22px] w-[22px] min-w-[22px] items-center justify-center rounded-full text-xs font-extrabold text-white",
          tone === "success" && "bg-success",
          tone === "error" && "bg-error",
          tone === "warning" && "bg-warning",
          tone === "info" && "bg-info",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {t.icon}
      </span>
      <div className={t.fg}>
        {title && <div className="mb-0.5 font-extrabold">{title}</div>}
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
}
