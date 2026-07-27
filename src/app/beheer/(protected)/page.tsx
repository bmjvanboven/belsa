import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

const sections = [
  { href: "/beheer/nieuws", title: "Nieuws", description: "Berichten toevoegen, bewerken en verwijderen" },
  { href: "/beheer/agenda", title: "Agenda", description: "Reserveringen bestuurskamer en kantine beheren" },
  { href: "/beheer/downloads", title: "Downloads", description: "Documenten toevoegen en beheren" },
  { href: "/beheer/contacten", title: "Contactpersonen", description: "Bestuur en contactpersonen beheren" },
];

export default function BeheerDashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p className="mt-2 text-fg-secondary">Kies hieronder wat je wilt beheren.</p>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="block rounded-lg border border-border-default bg-surface-card p-6 no-underline shadow-sm transition-colors duration-150 hover:border-black-900"
          >
            <Badge tone="neutral">Beheer</Badge>
            <h3 className="mt-3 text-xl">{s.title}</h3>
            <p className="mt-1 text-sm text-fg-secondary">{s.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
