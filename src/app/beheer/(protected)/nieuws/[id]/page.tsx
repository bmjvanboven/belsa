import { notFound } from "next/navigation";
import { db } from "@/db";
import { news } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NewsForm } from "../NewsForm";
import { BackLink } from "@/components/admin/BackLink";

export const dynamic = "force-dynamic";

type Params = Promise<{ id: string }>;

export default async function EditNewsPage({ params }: { params: Params }) {
  const { id } = await params;
  const [item] = await db.select().from(news).where(eq(news.id, Number(id))).limit(1);
  if (!item) notFound();

  return (
    <div>
      <BackLink href="/beheer/nieuws" label="Nieuws" />
      <h1>Nieuwsbericht bewerken</h1>
      <div className="mt-6 max-w-2xl">
        <NewsForm
          newsId={item.id}
          defaultValues={{
            title: item.title,
            slug: item.slug,
            tag: item.tag,
            club: item.club,
            excerpt: item.excerpt,
            body: item.body,
            published: item.published,
          }}
        />
      </div>
    </div>
  );
}
