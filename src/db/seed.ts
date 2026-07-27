import { db } from "./index";
import { news, agendaItems, downloads, contactPersons } from "./schema";

async function main() {
  console.log("Seeding database...");

  await db.delete(news);
  await db.delete(agendaItems);
  await db.delete(downloads);
  await db.delete(contactPersons);

  await db.insert(news).values([
    {
      title: "RKSV Liessel wint van SV Meijel",
      slug: "rksv-liessel-wint-van-sv-meijel",
      tag: "Voetbal",
      club: "RKSV Liessel",
      excerpt: "Zaterdag won het eerste elftal met 3-1 op eigen veld.",
      body: "Zaterdag won het eerste elftal met 3-1 op eigen veld. Een sterke tweede helft was doorslaggevend.",
    },
    {
      title: "Livoc dames promoveren naar 2e klasse",
      slug: "livoc-dames-promoveren-naar-2e-klasse",
      tag: "Volleybal",
      club: "Livoc",
      excerpt: "Na een sterk seizoen is promotie een feit.",
      body: "Na een sterk seizoen is promotie een feit. Komend weekend is de huldiging in de kantine.",
    },
    {
      title: "Inschrijving jeugdkorfbal geopend",
      slug: "inschrijving-jeugdkorfbal-geopend",
      tag: "Korfbal",
      club: "De Eendracht",
      excerpt: "Kinderen van 6 t/m 12 jaar kunnen zich weer aanmelden.",
      body: "Kinderen van 6 t/m 12 jaar kunnen zich weer aanmelden voor het nieuwe seizoen.",
    },
    {
      title: "Nieuwe padelbanen geopend",
      slug: "nieuwe-padelbanen-geopend",
      tag: "Tennis",
      club: "Tennisclub Liessel",
      excerpt: "Vanaf deze maand zijn er twee gloednieuwe padelbanen.",
      body: "Vanaf deze maand zijn er twee gloednieuwe padelbanen te reserveren via de app.",
    },
    {
      title: "Onderhoud hoofdveld in augustus",
      slug: "onderhoud-hoofdveld-in-augustus",
      tag: "Sportpark",
      club: "Belsa",
      excerpt: "Het hoofdveld wordt opnieuw ingezaaid.",
      body: "Het hoofdveld wordt opnieuw ingezaaid; trainingen wijken tijdelijk uit naar veld 2.",
    },
    {
      title: "Nieuwe kantinebeheerder gezocht",
      slug: "nieuwe-kantinebeheerder-gezocht",
      tag: "Nieuws",
      club: "Belsa",
      excerpt: "We zoeken een gezellig gezin of team.",
      body: "We zoeken een gezellig gezin of team dat de kantine op zaterdagen wil runnen.",
    },
  ]);

  await db.insert(agendaItems).values([
    {
      type: "bestuurskamer",
      title: "Bestuursvergadering BELSA",
      date: "2026-07-30",
      startTime: "19:30",
      endTime: "21:30",
      reservedBy: "Bestuur BELSA",
    },
    {
      type: "bestuurskamer",
      title: "Overleg RKSV Liessel bestuur",
      date: "2026-08-03",
      startTime: "20:00",
      endTime: "22:00",
      reservedBy: "RKSV Liessel",
    },
    {
      type: "kantine",
      title: "Kantineborrel vrijwilligers",
      date: "2026-07-31",
      startTime: "20:00",
      endTime: "23:00",
      reservedBy: "Belsa",
    },
    {
      type: "kantine",
      title: "Toernooi-ontvangst gasten",
      date: "2026-08-08",
      startTime: "10:00",
      endTime: "16:00",
      reservedBy: "Tennisclub Liessel",
    },
  ]);

  await db.insert(downloads).values([
    {
      title: "Huishoudelijk reglement BELSA",
      filename: "huishoudelijk-reglement-belsa.pdf",
      url: "/downloads/huishoudelijk-reglement-belsa.pdf",
      category: "Reglementen",
    },
    {
      title: "Reserveringsformulier kantine",
      filename: "reserveringsformulier-kantine.pdf",
      url: "/downloads/reserveringsformulier-kantine.pdf",
      category: "Formulieren",
    },
    {
      title: "Verhuur- en gebruiksvoorwaarden sportpark",
      filename: "verhuurvoorwaarden-sportpark.pdf",
      url: "/downloads/verhuurvoorwaarden-sportpark.pdf",
      category: "Reglementen",
    },
  ]);

  await db.insert(contactPersons).values([
    { name: "Jan van der Heijden", role: "Voorzitter", email: "voorzitter@sportparkdesmeltkroes.nl", sortOrder: 1 },
    { name: "Marieke Verhoeven", role: "Secretaris", email: "secretaris@sportparkdesmeltkroes.nl", sortOrder: 2 },
    { name: "Peter Kuijpers", role: "Penningmeester", email: "penningmeester@sportparkdesmeltkroes.nl", sortOrder: 3 },
    { name: "Anne Manders", role: "Bestuurslid accommodatie", email: "accommodatie@sportparkdesmeltkroes.nl", sortOrder: 4 },
  ]);

  console.log("Done seeding.");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
