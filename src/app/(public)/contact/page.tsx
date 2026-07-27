import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact"
        intro="Vragen, opmerkingen of iets reserveren? Stuur ons een bericht of kom langs op het sportpark."
      />
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
          <ContactForm />

          <div className="flex flex-col gap-6">
            <div className="rounded-lg border border-border-default bg-surface-sunken p-6">
              <h3 className="text-lg">Praktische gegevens</h3>
              <div className="mt-4 flex flex-col gap-3 text-sm text-fg-secondary">
                <div>
                  <div className="font-bold text-fg-primary">Adres</div>
                  Kloosterstraat 1, 5757 Liessel
                </div>
                <div>
                  <div className="font-bold text-fg-primary">E-mail</div>
                  <a href="mailto:info@sportparkdesmeltkroes.nl">info@sportparkdesmeltkroes.nl</a>
                </div>
                <div>
                  <div className="font-bold text-fg-primary">Bestuur</div>
                  Zie het{" "}
                  <a href="/contacten">overzicht van bestuur &amp; contactpersonen</a>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
