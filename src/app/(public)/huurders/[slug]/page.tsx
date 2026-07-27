import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { db } from "@/db";
import { tenants } from "@/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

type Params = Promise<{ slug: string }>;

export default async function TenantDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const [item] = await db.select().from(tenants).where(eq(tenants.slug, slug)).limit(1);

  if (!item || !item.published) {
    notFound();
  }

  return (
    <>
      <section className="border-b border-border-default bg-surface-sunken">
        <Container className="py-12 sm:py-16">
          <Button href="/huurders" variant="ghost" size="sm" className="-ml-3 mb-4">
            ← Alle huurders
          </Button>
          <Badge tone="dark">{item.sport}</Badge>
          <h1 className="mt-4">{item.name}</h1>
        </Container>
      </section>
      <Container className="py-12">
        <p className="max-w-2xl whitespace-pre-line text-lg text-fg-secondary">{item.body}</p>
        {item.website && (
          <div className="mt-8">
            <Button href={item.website} variant="secondary">
              Bezoek website →
            </Button>
          </div>
        )}
      </Container>
    </>
  );
}
