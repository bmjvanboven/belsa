import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { AgendaList } from "@/components/agenda/AgendaList";
import { db } from "@/db";
import { agendaItems } from "@/db/schema";
import { asc, eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function AgendaKantinePage() {
  const items = await db
    .select()
    .from(agendaItems)
    .where(eq(agendaItems.type, "kantine"))
    .orderBy(asc(agendaItems.date), asc(agendaItems.startTime));

  return (
    <>
      <PageHeader
        eyebrow="Agenda"
        title="Agenda kantine"
        intro="Reserveringen en activiteiten in de kantine van sportpark De Smeltkroes."
      />
      <Container className="py-12">
        <AgendaList items={items} />
      </Container>
    </>
  );
}
