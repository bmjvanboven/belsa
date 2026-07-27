import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { Alert } from "@/components/ui/Alert";

export default function NieuwsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nieuws"
        title="Nieuws"
        intro="Het laatste nieuws van RKSV Liessel, Livoc, De Eendracht, Tennisclub Liessel en het sportpark zelf."
      />
      <Container className="py-12">
        <Alert tone="info" title="Binnenkort compleet">
          Hier komt het volledige nieuwsoverzicht met alle berichten van de clubs en het sportpark.
        </Alert>
      </Container>
    </>
  );
}
