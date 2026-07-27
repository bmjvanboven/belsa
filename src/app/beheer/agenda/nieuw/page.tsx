import { BackLink } from "@/components/admin/BackLink";
import { AgendaItemForm } from "../AgendaItemForm";

export default function NieuweAgendaItemPage() {
  return (
    <div>
      <BackLink href="/beheer/agenda" label="Agenda" />
      <h1>Nieuwe reservering</h1>
      <div className="mt-6 max-w-2xl">
        <AgendaItemForm />
      </div>
    </div>
  );
}
