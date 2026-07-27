import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { Alert } from "@/components/ui/Alert";

export default function BeheerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Beheer"
        title="Beheeromgeving"
        intro="Hier kunnen bestuur en beheerders straks inloggen om nieuws, agenda, downloads en contactpersonen te beheren."
      />
      <Container className="py-12">
        <Alert tone="info" title="Nog niet beschikbaar">
          Login en beheerformulieren volgen in de volgende fase van de bouw.
        </Alert>
      </Container>
    </>
  );
}
