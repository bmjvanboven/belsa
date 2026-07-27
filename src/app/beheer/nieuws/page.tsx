import Link from "next/link";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { ConfirmDeleteButton } from "@/components/admin/ConfirmDeleteButton";
import { db } from "@/db";
import { news } from "@/db/schema";
import { desc } from "drizzle-orm";
import { deleteNews } from "./actions";

export const dynamic = "force-dynamic";

export default async function BeheerNieuwsPage() {
  const items = await db.select().from(news).orderBy(desc(news.publishedAt));

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1>Nieuws</h1>
        <Button href="/beheer/nieuws/nieuw" variant="primary" size="sm">
          + Nieuw bericht
        </Button>
      </div>

      <div className="mt-6">
        {items.length === 0 ? (
          <Alert tone="info">Er zijn nog geen nieuwsberichten.</Alert>
        ) : (
          <Table
            columns={["Titel", "Club", "Status", ""]}
            rows={items.map((n) => [
              <Link key="title" href={`/beheer/nieuws/${n.id}`} className="font-bold no-underline hover:underline">
                {n.title}
              </Link>,
              n.club,
              n.published ? <Badge key="status" tone="success">Gepubliceerd</Badge> : <Badge key="status" tone="neutral">Concept</Badge>,
              <ConfirmDeleteButton key="delete" action={deleteNews.bind(null, n.id)} />,
            ])}
          />
        )}
      </div>
    </div>
  );
}
