import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-primary">
      <Image
        src="/foto-1.jpg"
        alt="Sportpark De Smeltkroes"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-primary/80" />
      <Container className="relative z-10 flex min-h-[520px] flex-col justify-end gap-8 py-16">
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
            <Button href="/contact" variant="outline-dark">
              Contact
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
