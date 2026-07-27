import { BackLink } from "@/components/admin/BackLink";
import { ContactPersonForm } from "../ContactPersonForm";

export default function NieuweContactPersoonPage() {
  return (
    <div>
      <BackLink href="/beheer/contacten" label="Contactpersonen" />
      <h1>Nieuwe contactpersoon</h1>
      <div className="mt-6 max-w-2xl">
        <ContactPersonForm />
      </div>
    </div>
  );
}
