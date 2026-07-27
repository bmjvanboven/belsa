import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { db } from "@/db";
import { news } from "@/db/schema";
import { eq } from "drizzle-orm";
import { formatNewsDate } from "@/lib/format";

export const dynamic = "force-dynamic";

type Params = Promise<{ slug: string }>;

export default async function NewsDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const [item] = await db.select().from(news).where(eq(news.slug, slug)).limit(1);

  if (!item || !item.published) {
    notFound();
  }

  return (
    <>
      <section className="border-b border-border-default bg-surface-sunken">
        <Container className="py-12 sm:py-16">
          <Button href="/nieuws" variant="ghost" size="sm" className="-ml-3 mb-4">
            ← Alle nieuws
          </Button>
          <Badge tone="dark">{item.tag}</Badge>
          <h1 className="mt-4">{item.title}</h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-fg-secondary">
            <Badge tone="neutral">{item.club}</Badge>
            <span>{formatNewsDate(item.publishedAt)}</span>
          </div>
        </Container>
      </section>
      <Container className="py-12">
        <p className="max-w-2xl whitespace-pre-line text-lg text-fg-secondary">{item.body}</p>
      </Container>
    </>
  );
}
