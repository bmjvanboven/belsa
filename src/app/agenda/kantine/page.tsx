import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { Alert } from "@/components/ui/Alert";

export default function AgendaKantinePage() {
  return (
    <>
      <PageHeader
        eyebrow="Agenda"
        title="Agenda kantine"
        intro="Reserveringen en activiteiten in de kantine van sportpark De Smeltkroes."
      />
      <Container className="py-12">
        <Alert tone="info" title="Binnenkort compleet">
          Hier komt de volledige agenda van de kantine, inclusief lopende reserveringen.
        </Alert>
      </Container>
    </>
  );
}
