import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { Alert } from "@/components/ui/Alert";
import { db } from "@/db";
import { contactPersons } from "@/db/schema";
import { asc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function ContactenPage() {
  const persons = await db.select().from(contactPersons).orderBy(asc(contactPersons.sortOrder));

  return (
    <>
      <PageHeader
        eyebrow="Sportpark"
        title="Bestuur & contactpersonen"
        intro="Wie zit er in het bestuur van BELSA en wie kun je waarvoor bereiken?"
      />
      <Container className="py-12">
        {persons.length === 0 ? (
          <Alert tone="info" title="Nog geen contactpersonen">
            Er staan op dit moment geen contactpersonen vermeld.
          </Alert>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {persons.map((p) => (
              <div key={p.id} className="rounded-lg border border-border-default bg-surface-card p-5 shadow-sm">
                <div className="text-lg font-display font-bold">{p.name}</div>
                <div className="mt-0.5 text-sm font-bold text-primary-active">{p.role}</div>
                <div className="mt-3 flex flex-col gap-1 text-sm text-fg-secondary">
                  {p.email && <a href={`mailto:${p.email}`}>{p.email}</a>}
                  {p.phone && <a href={`tel:${p.phone}`}>{p.phone}</a>}
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
