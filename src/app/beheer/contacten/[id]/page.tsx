import { notFound } from "next/navigation";
import { db } from "@/db";
import { contactPersons } from "@/db/schema";
import { eq } from "drizzle-orm";
import { ContactPersonForm } from "../ContactPersonForm";

export const dynamic = "force-dynamic";

type Params = Promise<{ id: string }>;

export default async function EditContactPersonPage({ params }: { params: Params }) {
  const { id } = await params;
  const [item] = await db.select().from(contactPersons).where(eq(contactPersons.id, Number(id))).limit(1);
  if (!item) notFound();

  return (
    <div>
      <h1>Contactpersoon bewerken</h1>
      <div className="mt-6 max-w-2xl">
        <ContactPersonForm
          personId={item.id}
          defaultValues={{
            name: item.name,
            role: item.role,
            email: item.email ?? "",
            phone: item.phone ?? "",
            sortOrder: item.sortOrder,
          }}
        />
      </div>
    </div>
  );
}
