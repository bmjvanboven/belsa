import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { Alert } from "@/components/ui/Alert";

export default function DownloadsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sportpark"
        title="Downloads"
        intro="Formulieren, reglementen en andere documenten om te downloaden."
      />
      <Container className="py-12">
        <Alert tone="info" title="Binnenkort compleet">
          Hier komt de volledige lijst met downloadbare documenten, met bestandsnaam en categorie.
        </Alert>
      </Container>
    </>
  );
}
