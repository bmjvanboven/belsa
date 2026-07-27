import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
}) {
  return (
    <section className="border-b border-border-default bg-surface-sunken">
      <Container className="py-12 sm:py-16">
        {eyebrow && <Badge tone="dark">{eyebrow}</Badge>}
        <h1 className="mt-4">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-fg-secondary">{intro}</p>}
      </Container>
    </section>
  );
}
