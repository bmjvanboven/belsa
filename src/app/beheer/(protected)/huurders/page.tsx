import Link from "next/link";
import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { Badge } from "@/components/ui/Badge";
import { ConfirmDeleteButton } from "@/components/admin/ConfirmDeleteButton";
import { BackLink } from "@/components/admin/BackLink";
import { db } from "@/db";
import { tenants } from "@/db/schema";
import { asc } from "drizzle-orm";
import { deleteTenant } from "./actions";

export const dynamic = "force-dynamic";

export default async function BeheerHuurdersPage() {
  const items = await db.select().from(tenants).orderBy(asc(tenants.sortOrder));

  return (
    <div>
      <BackLink href="/beheer" label="Dashboard" />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1>Huurders</h1>
        <Button href="/beheer/huurders/nieuw" variant="primary" size="sm">
          + Nieuwe huurder
        </Button>
      </div>

      <div className="mt-6">
        {items.length === 0 ? (
          <Alert tone="info">Er zijn nog geen huurders toegevoegd.</Alert>
        ) : (
          <Table
            columns={["Naam", "Sport", "Status", ""]}
            rows={items.map((t) => [
              <Link key="name" href={`/beheer/huurders/${t.id}`} className="font-bold no-underline hover:underline">
                {t.name}
              </Link>,
              t.sport,
              t.published ? (
                <Badge key="status" tone="success">Gepubliceerd</Badge>
              ) : (
                <Badge key="status" tone="neutral">Concept</Badge>
              ),
              <ConfirmDeleteButton key="delete" action={deleteTenant.bind(null, t.id)} />,
            ])}
          />
        )}
      </div>
    </div>
  );
}
