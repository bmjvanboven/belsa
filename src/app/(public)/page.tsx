import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { Hero } from "@/components/home/Hero";
import { db } from "@/db";
import { news, agendaItems } from "@/db/schema";
import { asc, desc, eq, gte } from "drizzle-orm";
import { formatAgendaDate, formatTime } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function Home() {
  const today = new Date().toISOString().slice(0, 10);

  const [latestNews, upcomingAgenda] = await Promise.all([
    db.select().from(news).where(eq(news.published, true)).orderBy(desc(news.publishedAt)).limit(6),
    db
      .select()
      .from(agendaItems)
      .where(gte(agendaItems.date, today))
      .orderBy(asc(agendaItems.date), asc(agendaItems.startTime))
      .limit(4),
  ]);

  return (
    <>
      <Hero />

      <section className="py-14">
        <Container>
          <div className="mb-6 flex items-baseline justify-between">
            <h2>Laatste nieuws</h2>
            <Button href="/nieuws" variant="ghost" size="sm">
              Alle nieuws →
            </Button>
          </div>
          {latestNews.length === 0 ? (
            <Alert tone="info" title="Nog geen nieuws">
              Er zijn nog geen berichten geplaatst.
            </Alert>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {latestNews.map((n) => (
                <Card
                  key={n.id}
                  eyebrow={n.tag}
                  title={n.title}
                  footer={
                    <div className="flex items-center justify-between">
                      <Badge tone="neutral">{n.club}</Badge>
                      <Button href={`/nieuws/${n.slug}`} variant="ghost" size="sm">
                        Lees meer →
                      </Button>
                    </div>
                  }
                >
                  {n.excerpt}
                </Card>
              ))}
            </div>
          )}
        </Container>
      </section>

      <section className="bg-surface-sunken py-14">
        <Container>
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
            <h2>Agenda deze week</h2>
            <div className="flex gap-2">
              <Button href="/agenda/bestuurskamer" variant="ghost" size="sm">
                Bestuurskamer →
              </Button>
              <Button href="/agenda/kantine" variant="ghost" size="sm">
                Kantine →
              </Button>
            </div>
          </div>
          {upcomingAgenda.length === 0 ? (
            <Alert tone="info" title="Nog geen reserveringen">
              Er staan op dit moment geen reserveringen gepland.
            </Alert>
          ) : (
            <div className="flex flex-col gap-0.5 overflow-hidden rounded-lg border border-border-default">
              {upcomingAgenda.map((e, i) => (
                <div
                  key={e.id}
                  className={["flex flex-wrap items-center gap-3 sm:gap-5 px-5 py-4", i % 2 ? "bg-surface-page" : "bg-white"].join(
                    " "
                  )}
                >
                  <div className="w-[90px] font-display font-extrabold text-fg-primary">{formatAgendaDate(e.date)}</div>
                  <div className="w-[70px] tabular-nums text-fg-muted">{formatTime(e.startTime)}</div>
                  <div className="flex-1 min-w-[160px] font-bold">{e.title}</div>
                  <Badge tone={e.type === "bestuurskamer" ? "dark" : "primary"}>
                    {e.type === "bestuurskamer" ? "Bestuurskamer" : "Kantine"}
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
