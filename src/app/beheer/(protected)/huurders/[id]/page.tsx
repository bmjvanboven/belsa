import { notFound } from "next/navigation";
import { db } from "@/db";
import { tenants } from "@/db/schema";
import { eq } from "drizzle-orm";
import { TenantForm } from "../TenantForm";
import { BackLink } from "@/components/admin/BackLink";

export const dynamic = "force-dynamic";

type Params = Promise<{ id: string }>;

export default async function EditTenantPage({ params }: { params: Params }) {
  const { id } = await params;
  const [item] = await db.select().from(tenants).where(eq(tenants.id, Number(id))).limit(1);
  if (!item) notFound();

  return (
    <div>
      <BackLink href="/beheer/huurders" label="Huurders" />
      <h1>Huurder bewerken</h1>
      <div className="mt-6 max-w-2xl">
        <TenantForm
          tenantId={item.id}
          defaultValues={{
            name: item.name,
            slug: item.slug,
            sport: item.sport,
            summary: item.summary,
            body: item.body,
            website: item.website ?? "",
            sortOrder: item.sortOrder,
            published: item.published,
          }}
        />
      </div>
    </div>
  );
}
