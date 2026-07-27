import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { Alert } from "@/components/ui/Alert";

export default function ContactenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sportpark"
        title="Bestuur & contactpersonen"
        intro="Wie zit er in het bestuur van BELSA en wie kun je waarvoor bereiken?"
      />
      <Container className="py-12">
        <Alert tone="info" title="Binnenkort compleet">
          Hier komt het overzicht van bestuursleden en contactpersonen, met naam, functie en contactgegevens.
        </Alert>
      </Container>
    </>
  );
}
