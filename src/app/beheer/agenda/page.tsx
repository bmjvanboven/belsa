import Link from "next/link";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { ConfirmDeleteButton } from "@/components/admin/ConfirmDeleteButton";
import { db } from "@/db";
import { agendaItems } from "@/db/schema";
import { asc } from "drizzle-orm";
import { formatAgendaDate, formatTime } from "@/lib/format";
import { deleteAgendaItem } from "./actions";

export const dynamic = "force-dynamic";

export default async function BeheerAgendaPage() {
  const items = await db.select().from(agendaItems).orderBy(asc(agendaItems.date), asc(agendaItems.startTime));

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1>Agenda</h1>
        <Button href="/beheer/agenda/nieuw" variant="primary" size="sm">
          + Nieuwe reservering
        </Button>
      </div>

      <div className="mt-6">
        {items.length === 0 ? (
          <Alert tone="info">Er zijn nog geen reserveringen.</Alert>
        ) : (
          <Table
            columns={["Datum", "Tijd", "Titel", "Type", "Door", ""]}
            rows={items.map((item) => [
              formatAgendaDate(item.date),
              `${formatTime(item.startTime)}${item.endTime ? `–${formatTime(item.endTime)}` : ""}`,
              <Link key="title" href={`/beheer/agenda/${item.id}`} className="font-bold no-underline hover:underline">
                {item.title}
              </Link>,
              <Badge key="type" tone={item.type === "bestuurskamer" ? "dark" : "primary"}>
                {item.type === "bestuurskamer" ? "Bestuurskamer" : "Kantine"}
              </Badge>,
              item.reservedBy ?? "—",
              <ConfirmDeleteButton key="delete" action={deleteAgendaItem.bind(null, item.id)} />,
            ])}
          />
        )}
      </div>
    </div>
  );
}
