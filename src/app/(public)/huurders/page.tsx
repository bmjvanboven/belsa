import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const huurders = [
  {
    naam: "RKSV Liessel",
    sport: "Voetbal",
    tone: "primary" as const,
    beschrijving:
      "De voetbalclub van Liessel, met teams voor senioren, junioren en de allerkleinsten. Thuiswedstrijden op de hoofdvelden van het sportpark.",
    link: "#",
  },
  {
    naam: "Livoc",
    sport: "Volleybal",
    tone: "neutral" as const,
    beschrijving:
      "Volleybalvereniging Livoc traint en speelt in de sporthal van het sportpark, met teams in verschillende klasses.",
    link: "#",
  },
  {
    naam: "De Eendracht",
    sport: "Korfbal",
    tone: "neutral" as const,
    beschrijving:
      "Korfbalvereniging De Eendracht, met veel aandacht voor jeugd en breedtesport naast de senioren teams.",
    link: "#",
  },
  {
    naam: "Tennisclub Liessel",
    sport: "Tennis & padel",
    tone: "neutral" as const,
    beschrijving:
      "Tennisclub Liessel beheert de tennis- en padelbanen van het sportpark, met clubavonden en toernooien voor alle niveaus.",
    link: "#",
  },
];

export default function HuurdersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Verenigingen"
        title="Huurders van het sportpark"
        intro="Vier verenigingen delen sportpark De Smeltkroes, elk met hun eigen identiteit en teams."
      />
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {huurders.map((h) => (
            <Card
              key={h.naam}
              eyebrow={h.sport}
              title={h.naam}
              footer={
                <div className="flex items-center justify-between">
                  <Badge tone={h.tone}>{h.sport}</Badge>
                  <Button href={h.link} variant="ghost" size="sm">
                    Meer info →
                  </Button>
                </div>
              }
            >
              {h.beschrijving}
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
