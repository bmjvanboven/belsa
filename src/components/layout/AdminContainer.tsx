import type { ReactNode } from "react";

export function AdminContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={["w-full px-5 sm:px-8 lg:px-10", className].filter(Boolean).join(" ")}>{children}</div>;
}
