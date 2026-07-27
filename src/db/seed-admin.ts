import bcrypt from "bcryptjs";
import { db } from "./index";
import { adminUsers } from "./schema";
import { eq } from "drizzle-orm";

async function main() {
  const email = process.argv[2];
  const password = process.argv[3];
  const name = process.argv[4] ?? "Beheerder";

  if (!email || !password) {
    console.error("Gebruik: tsx src/db/seed-admin.ts <email> <wachtwoord> [naam]");
    process.exit(1);
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const [existing] = await db.select().from(adminUsers).where(eq(adminUsers.email, email)).limit(1);

  if (existing) {
    await db.update(adminUsers).set({ passwordHash, name }).where(eq(adminUsers.email, email));
    console.log(`Wachtwoord bijgewerkt voor ${email}.`);
  } else {
    await db.insert(adminUsers).values({ email, passwordHash, name });
    console.log(`Beheerder aangemaakt: ${email}.`);
  }

  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
