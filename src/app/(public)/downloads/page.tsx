import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { Table } from "@/components/ui/Table";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { db } from "@/db";
import { downloads } from "@/db/schema";
import { asc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function DownloadsPage() {
  const items = await db.select().from(downloads).orderBy(asc(downloads.category), asc(downloads.title));

  return (
    <>
      <PageHeader
        eyebrow="Sportpark"
        title="Downloads"
        intro="Formulieren, reglementen en andere documenten om te downloaden."
      />
      <Container className="py-12">
        {items.length === 0 ? (
          <Alert tone="info" title="Nog geen documenten">
            Er staan op dit moment geen downloads klaar.
          </Alert>
        ) : (
          <Table
            columns={["Bestand", "Categorie", ""]}
            rows={items.map((d) => [
              <div key="title">
                <div className="font-bold">{d.title}</div>
                <div className="text-xs text-fg-muted">{d.filename}</div>
              </div>,
              d.category,
              <Button key="dl" href={d.url} variant="ghost" size="sm">
                Download →
              </Button>,
            ])}
          />
        )}
      </Container>
    </>
  );
}
