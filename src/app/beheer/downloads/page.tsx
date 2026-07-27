import Link from "next/link";
import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { ConfirmDeleteButton } from "@/components/admin/ConfirmDeleteButton";
import { db } from "@/db";
import { downloads } from "@/db/schema";
import { asc } from "drizzle-orm";
import { deleteDownload } from "./actions";

export const dynamic = "force-dynamic";

export default async function BeheerDownloadsPage() {
  const items = await db.select().from(downloads).orderBy(asc(downloads.category), asc(downloads.title));

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1>Downloads</h1>
        <Button href="/beheer/downloads/nieuw" variant="primary" size="sm">
          + Nieuw document
        </Button>
      </div>

      <div className="mt-6">
        {items.length === 0 ? (
          <Alert tone="info">Er zijn nog geen downloads.</Alert>
        ) : (
          <Table
            columns={["Titel", "Categorie", "Bestand", ""]}
            rows={items.map((d) => [
              <Link key="title" href={`/beheer/downloads/${d.id}`} className="font-bold no-underline hover:underline">
                {d.title}
              </Link>,
              d.category,
              d.filename,
              <ConfirmDeleteButton key="delete" action={deleteDownload.bind(null, d.id)} />,
            ])}
          />
        )}
      </div>
    </div>
  );
}
