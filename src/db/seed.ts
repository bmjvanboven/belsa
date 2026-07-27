import { db } from "./index";
import { news, agendaItems, downloads, contactPersons, tenants } from "./schema";

async function main() {
  console.log("Seeding database...");

  await db.delete(news);
  await db.delete(agendaItems);
  await db.delete(downloads);
  await db.delete(contactPersons);
  await db.delete(tenants);

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
      title: "Reglement gebruik overdekte sportaccommodatie (2012)",
      filename: "reglement-overdekte-sportaccommodatie-2012.pdf",
      url: "/downloads/reglement-overdekte-sportaccommodatie-2012.pdf",
      category: "Reglementen",
      fileSize: 354159,
    },
    {
      title: "Huisregels sportpark De Smeltkroes",
      filename: "huisregels-sportpark.pdf",
      url: "/downloads/huisregels-sportpark.pdf",
      category: "Reglementen",
      fileSize: 301867,
    },
    {
      title: "Alcoholbeleid kantine",
      filename: "alcoholbeleid-kantine.pdf",
      url: "/downloads/alcoholbeleid-kantine.pdf",
      category: "Reglementen",
      fileSize: 440839,
    },
    {
      title: "Informatieplan BELSA",
      filename: "informatieplan-belsa.pdf",
      url: "/downloads/informatieplan-belsa.pdf",
      category: "Informatie",
      fileSize: 196441,
    },
    {
      title: "Sportpark De Smeltkroes — van idee naar realisatie",
      filename: "sportpark-de-smeltkroes-van-idee-naar-realisatie.pdf",
      url: "/downloads/sportpark-de-smeltkroes-van-idee-naar-realisatie.pdf",
      category: "Sportpark",
      fileSize: 3494117,
    },
  ]);

  await db.insert(contactPersons).values([
    { name: "Jan van der Heijden", role: "Voorzitter", email: "voorzitter@sportparkdesmeltkroes.nl", sortOrder: 1 },
    { name: "Marieke Verhoeven", role: "Secretaris", email: "secretaris@sportparkdesmeltkroes.nl", sortOrder: 2 },
    { name: "Peter Kuijpers", role: "Penningmeester", email: "penningmeester@sportparkdesmeltkroes.nl", sortOrder: 3 },
    { name: "Anne Manders", role: "Bestuurslid accommodatie", email: "accommodatie@sportparkdesmeltkroes.nl", sortOrder: 4 },
  ]);

  await db.insert(tenants).values([
    {
      name: "RKSV Liessel",
      slug: "rksv-liessel",
      sport: "Voetbal",
      summary:
        "De voetbalclub van Liessel, met teams voor senioren, junioren en de allerkleinsten. Thuiswedstrijden op de hoofdvelden van het sportpark.",
      body: "RKSV Liessel is de voetbalclub van Liessel en speelt haar thuiswedstrijden op de hoofdvelden van sportpark De Smeltkroes. De club heeft teams voor senioren, junioren en de allerkleinsten, en draait grotendeels op de inzet van vrijwilligers uit het dorp.\n\nNieuwe leden zijn altijd welkom, van jeugd tot senioren. Voor meer informatie over trainingstijden, teams en lidmaatschap kun je contact opnemen via de club.",
      website: null,
      sortOrder: 1,
    },
    {
      name: "Livoc",
      slug: "livoc",
      sport: "Volleybal",
      summary:
        "Volleybalvereniging Livoc traint en speelt in de sporthal van het sportpark, met teams in verschillende klasses.",
      body: "Livoc is de volleybalvereniging van Liessel en maakt gebruik van de sporthal op sportpark De Smeltkroes. De vereniging heeft teams in verschillende klasses, voor zowel dames als heren.\n\nOf je nu recreatief of competitief wilt volleyballen, bij Livoc is er ruimte voor iedereen. Neem contact op voor meer informatie over trainingen en aanmelden.",
      website: null,
      sortOrder: 2,
    },
    {
      name: "De Eendracht",
      slug: "de-eendracht",
      sport: "Korfbal",
      summary:
        "Korfbalvereniging De Eendracht, met veel aandacht voor jeugd en breedtesport naast de senioren teams.",
      body: "Korfbalvereniging De Eendracht speelt en traint op sportpark De Smeltkroes. De vereniging besteedt veel aandacht aan jeugd en breedtesport, naast de senioren teams.\n\nKinderen vanaf 6 jaar kunnen zich aanmelden om kennis te maken met korfbal. Voor meer informatie over teams en inschrijven kun je terecht bij het bestuur.",
      website: null,
      sortOrder: 3,
    },
    {
      name: "Tennisclub Liessel",
      slug: "tennisclub-liessel",
      sport: "Tennis & padel",
      summary:
        "Tennisclub Liessel beheert de tennis- en padelbanen van het sportpark, met clubavonden en toernooien voor alle niveaus.",
      body: "Tennisclub Liessel beheert de tennis- en padelbanen van sportpark De Smeltkroes. De club organiseert clubavonden en toernooien voor leden van alle niveaus, en beschikt sinds kort ook over gloednieuwe padelbanen.\n\nWil je lid worden of eens meespelen? Neem contact op met de tennisclub voor meer informatie.",
      website: null,
      sortOrder: 4,
    },
  ]);

  console.log("Done seeding.");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
