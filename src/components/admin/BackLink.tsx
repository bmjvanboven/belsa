import Link from "next/link";

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="mb-4 inline-flex items-center gap-1.5 font-body text-sm font-bold text-fg-secondary no-underline hover:text-fg-primary"
    >
      ← {label}
    </Link>
  );
}
