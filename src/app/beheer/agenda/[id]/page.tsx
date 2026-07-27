import { notFound } from "next/navigation";
import { db } from "@/db";
import { agendaItems } from "@/db/schema";
import { eq } from "drizzle-orm";
import { formatTime } from "@/lib/format";
import { AgendaItemForm } from "../AgendaItemForm";

export const dynamic = "force-dynamic";

type Params = Promise<{ id: string }>;

export default async function EditAgendaItemPage({ params }: { params: Params }) {
  const { id } = await params;
  const [item] = await db.select().from(agendaItems).where(eq(agendaItems.id, Number(id))).limit(1);
  if (!item) notFound();

  return (
    <div>
      <h1>Reservering bewerken</h1>
      <div className="mt-6 max-w-2xl">
        <AgendaItemForm
          itemId={item.id}
          defaultValues={{
            type: item.type,
            title: item.title,
            date: item.date,
            startTime: formatTime(item.startTime),
            endTime: item.endTime ? formatTime(item.endTime) : "",
            reservedBy: item.reservedBy ?? "",
            notes: item.notes ?? "",
          }}
        />
      </div>
    </div>
  );
}
