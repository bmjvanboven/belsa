import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";

const placeholders = Array.from({ length: 8 });

export default function FotoalbumPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sportpark"
        title="Fotoalbum"
        intro="Foto's van wedstrijden, evenementen en het sportpark. Binnenkort met echte foto's van de clubs."
      />
      <Container className="py-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {placeholders.map((_, i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-lg border border-border-default bg-gray-100"
            >
              <span className="font-body text-sm text-fg-muted">Foto binnenkort</span>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
