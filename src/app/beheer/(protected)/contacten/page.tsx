import Link from "next/link";
import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { ConfirmDeleteButton } from "@/components/admin/ConfirmDeleteButton";
import { BackLink } from "@/components/admin/BackLink";
import { db } from "@/db";
import { contactPersons } from "@/db/schema";
import { asc } from "drizzle-orm";
import { deleteContactPerson } from "./actions";

export const dynamic = "force-dynamic";

export default async function BeheerContactenPage() {
  const persons = await db.select().from(contactPersons).orderBy(asc(contactPersons.sortOrder));

  return (
    <div>
      <BackLink href="/beheer" label="Dashboard" />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1>Contactpersonen</h1>
        <Button href="/beheer/contacten/nieuw" variant="primary" size="sm">
          + Nieuwe contactpersoon
        </Button>
      </div>

      <div className="mt-6">
        {persons.length === 0 ? (
          <Alert tone="info">Er zijn nog geen contactpersonen.</Alert>
        ) : (
          <Table
            columns={["Naam", "Functie", "E-mail", ""]}
            rows={persons.map((p) => [
              <Link key="name" href={`/beheer/contacten/${p.id}`} className="font-bold no-underline hover:underline">
                {p.name}
              </Link>,
              p.role,
              p.email ?? "—",
              <ConfirmDeleteButton key="delete" action={deleteContactPerson.bind(null, p.id)} />,
            ])}
          />
        )}
      </div>
    </div>
  );
}
