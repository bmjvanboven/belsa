import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { Alert } from "@/components/ui/Alert";

export default function AgendaBestuurskamerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Agenda"
        title="Agenda bestuurskamer"
        intro="Reserveringen en bijeenkomsten in de bestuurskamer van sportpark De Smeltkroes."
      />
      <Container className="py-12">
        <Alert tone="info" title="Binnenkort compleet">
          Hier komt de volledige agenda van de bestuurskamer, inclusief lopende reserveringen.
        </Alert>
      </Container>
    </>
  );
}
