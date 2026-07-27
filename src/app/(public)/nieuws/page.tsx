import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { db } from "@/db";
import { news } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function NieuwsPage() {
  const items = await db
    .select()
    .from(news)
    .where(eq(news.published, true))
    .orderBy(desc(news.publishedAt));

  return (
    <>
      <PageHeader
        eyebrow="Nieuws"
        title="Nieuws"
        intro="Het laatste nieuws van RKSV Liessel, Livoc, De Eendracht, Tennisclub Liessel en het sportpark zelf."
      />
      <Container className="py-12">
        {items.length === 0 ? (
          <Alert tone="info" title="Nog geen nieuws">
            Er zijn nog geen berichten geplaatst.
          </Alert>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((n) => (
              <Card
                key={n.id}
                eyebrow={n.tag}
                title={n.title}
                footer={
                  <div className="flex items-center justify-between">
                    <Badge tone="neutral">{n.club}</Badge>
                    <Button href={`/nieuws/${n.slug}`} variant="ghost" size="sm">
                      Lees meer →
                    </Button>
                  </div>
                }
              >
                {n.excerpt}
              </Card>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
