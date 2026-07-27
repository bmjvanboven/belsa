export type NavLink = { label: string; href: string; description?: string };
export type NavItem = { label: string; href?: string; children?: NavLink[] };

export const mainNav: NavItem[] = [
  { label: "Nieuws", href: "/nieuws" },
  {
    label: "Agenda",
    children: [
      { label: "Bestuurskamer", href: "/agenda/bestuurskamer", description: "Reserveringen bestuurskamer" },
      { label: "Kantine", href: "/agenda/kantine", description: "Reserveringen kantine" },
    ],
  },
  { label: "Huurders", href: "/huurders" },
  {
    label: "Sportpark",
    children: [
      { label: "Fotoalbum", href: "/fotoalbum", description: "Foto's van het sportpark" },
      { label: "Downloads", href: "/downloads", description: "Documenten en formulieren" },
      { label: "Bestuur", href: "/contacten", description: "Bestuur en contactpersonen" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavLink[] = [
  { label: "Nieuws", href: "/nieuws" },
  { label: "Agenda bestuurskamer", href: "/agenda/bestuurskamer" },
  { label: "Agenda kantine", href: "/agenda/kantine" },
  { label: "Huurders", href: "/huurders" },
  { label: "Fotoalbum", href: "/fotoalbum" },
  { label: "Downloads", href: "/downloads" },
  { label: "Bestuur", href: "/contacten" },
  { label: "Contact", href: "/contact" },
];
