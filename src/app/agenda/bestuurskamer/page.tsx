import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { AgendaList } from "@/components/agenda/AgendaList";
import { db } from "@/db";
import { agendaItems } from "@/db/schema";
import { asc, eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function AgendaBestuurskamerPage() {
  const items = await db
    .select()
    .from(agendaItems)
    .where(eq(agendaItems.type, "bestuurskamer"))
    .orderBy(asc(agendaItems.date), asc(agendaItems.startTime));

  return (
    <>
      <PageHeader
        eyebrow="Agenda"
        title="Agenda bestuurskamer"
        intro="Reserveringen en bijeenkomsten in de bestuurskamer van sportpark De Smeltkroes."
      />
      <Container className="py-12">
        <AgendaList items={items} />
      </Container>
    </>
  );
}
