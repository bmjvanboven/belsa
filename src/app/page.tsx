import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const nieuws = [
  {
    tag: "Voetbal",
    club: "RKSV Liessel",
    title: "RKSV Liessel wint van SV Meijel",
    body: "Zaterdag won het eerste elftal met 3-1 op eigen veld. Een sterke tweede helft was doorslaggevend.",
  },
  {
    tag: "Volleybal",
    club: "Livoc",
    title: "Livoc dames promoveren naar 2e klasse",
    body: "Na een sterk seizoen is promotie een feit. Komend weekend is de huldiging in de kantine.",
  },
  {
    tag: "Korfbal",
    club: "De Eendracht",
    title: "Inschrijving jeugdkorfbal geopend",
    body: "Kinderen van 6 t/m 12 jaar kunnen zich weer aanmelden voor het nieuwe seizoen.",
  },
  {
    tag: "Tennis",
    club: "Tennisclub Liessel",
    title: "Nieuwe padelbanen geopend",
    body: "Vanaf deze maand zijn er twee gloednieuwe padelbanen te reserveren via de app.",
  },
  {
    tag: "Sportpark",
    club: "Belsa",
    title: "Onderhoud hoofdveld in augustus",
    body: "Het hoofdveld wordt opnieuw ingezaaid; trainingen wijken tijdelijk uit naar veld 2.",
  },
  {
    tag: "Nieuws",
    club: "Belsa",
    title: "Nieuwe kantinebeheerder gezocht",
    body: "We zoeken een gezellig gezin of team dat de kantine op zaterdagen wil runnen.",
  },
];

const agendaHighlights = [
  { date: "do 30 jul", time: "19:30", title: "Bestuursvergadering BELSA", type: "Bestuurskamer" as const },
  { date: "vr 31 jul", time: "20:00", title: "Kantineborrel vrijwilligers", type: "Kantine" as const },
  { date: "ma 3 aug", time: "20:00", title: "Overleg RKSV Liessel bestuur", type: "Bestuurskamer" as const },
  { date: "za 8 aug", time: "10:00", title: "Toernooi-ontvangst gasten", type: "Kantine" as const },
];

export default function Home() {
  return (
    <>
      <section className="bg-primary">
        <Container className="flex flex-wrap items-center justify-between gap-8 py-16">
          <div className="max-w-[560px]">
            <Badge tone="dark">Sportpark De Smeltkroes</Badge>
            <h1 className="mt-4 text-fg-on-yellow">Het kloppend hart van sportief Liessel</h1>
            <p className="mt-4 text-lg text-black-800">
              Thuis van RKSV Liessel, Livoc, De Eendracht en Tennisclub Liessel — voor iedereen die van sport en
              gezelligheid houdt.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/agenda/bestuurskamer" variant="secondary">
                Bekijk agenda
              </Button>
              <Button href="/contact" variant="tertiary">
                Contact
              </Button>
            </div>
          </div>
          <Image
            src="/logos/logo-wordmark.svg"
            alt="BELSA"
            width={220}
            height={73}
            className="w-[220px] h-auto"
          />
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="mb-6 flex items-baseline justify-between">
            <h2>Laatste nieuws</h2>
            <Button href="/nieuws" variant="ghost" size="sm">
              Alle nieuws →
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {nieuws.map((n) => (
              <Card
                key={n.title}
                eyebrow={n.tag}
                title={n.title}
                footer={
                  <div className="flex items-center justify-between">
                    <Badge tone="neutral">{n.club}</Badge>
                    <Button href="/nieuws" variant="ghost" size="sm">
                      Lees meer →
                    </Button>
                  </div>
                }
              >
                {n.body}
              </Card>
            ))}
          </div>
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
          <div className="flex flex-col gap-0.5 overflow-hidden rounded-lg border border-border-default">
            {agendaHighlights.map((e, i) => (
              <div
                key={e.title}
                className={[
                  "flex items-center gap-5 px-5 py-4",
                  i % 2 ? "bg-surface-page" : "bg-white",
                ].join(" ")}
              >
                <div className="w-[90px] font-display font-extrabold text-fg-primary">{e.date}</div>
                <div className="w-[70px] tabular-nums text-fg-muted">{e.time}</div>
                <div className="flex-1 font-bold">{e.title}</div>
                <Badge tone={e.type === "Bestuurskamer" ? "dark" : "primary"}>{e.type}</Badge>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
