import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { db } from "@/db";
import { tenants } from "@/db/schema";
import { asc, eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function HuurdersPage() {
  const items = await db
    .select()
    .from(tenants)
    .where(eq(tenants.published, true))
    .orderBy(asc(tenants.sortOrder));

  return (
    <>
      <PageHeader
        eyebrow="Verenigingen"
        title="Huurders van het sportpark"
        intro="Sportpark De Smeltkroes is thuis van meerdere verenigingen, elk met hun eigen identiteit en teams."
      />
      <Container className="py-12">
        {items.length === 0 ? (
          <Alert tone="info" title="Nog geen huurders">
            Er zijn nog geen huurders toegevoegd.
          </Alert>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {items.map((t) => (
              <Card
                key={t.id}
                eyebrow={t.sport}
                title={t.name}
                footer={
                  <div className="flex items-center justify-between">
                    <Badge tone="neutral">{t.sport}</Badge>
                    <Button href={`/huurders/${t.slug}`} variant="ghost" size="sm">
                      Meer info →
                    </Button>
                  </div>
                }
              >
                {t.summary}
              </Card>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
