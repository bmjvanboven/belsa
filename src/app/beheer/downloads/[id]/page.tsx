import { notFound } from "next/navigation";
import { db } from "@/db";
import { downloads } from "@/db/schema";
import { eq } from "drizzle-orm";
import { DownloadForm } from "../DownloadForm";
import { BackLink } from "@/components/admin/BackLink";

export const dynamic = "force-dynamic";

type Params = Promise<{ id: string }>;

export default async function EditDownloadPage({ params }: { params: Params }) {
  const { id } = await params;
  const [item] = await db.select().from(downloads).where(eq(downloads.id, Number(id))).limit(1);
  if (!item) notFound();

  return (
    <div>
      <BackLink href="/beheer/downloads" label="Downloads" />
      <h1>Document bewerken</h1>
      <div className="mt-6 max-w-2xl">
        <DownloadForm
          downloadId={item.id}
          defaultValues={{
            title: item.title,
            filename: item.filename,
            url: item.url,
            category: item.category,
          }}
        />
      </div>
    </div>
  );
}
