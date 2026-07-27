"use server";

import { db } from "@/db";
import { contactPersons } from "@/db/schema";
import { eq } from "drizzle-orm";
import { requireAdminSession } from "@/lib/auth-helpers";
import { contactPersonSchema, type ContactPersonFormValues } from "./validation";

export async function createContactPerson(values: ContactPersonFormValues) {
  await requireAdminSession();
  const parsed = contactPersonSchema.parse(values);
  await db.insert(contactPersons).values({
    ...parsed,
    email: parsed.email || null,
    phone: parsed.phone || null,
  });
}

export async function updateContactPerson(id: number, values: ContactPersonFormValues) {
  await requireAdminSession();
  const parsed = contactPersonSchema.parse(values);
  await db
    .update(contactPersons)
    .set({
      ...parsed,
      email: parsed.email || null,
      phone: parsed.phone || null,
      updatedAt: new Date(),
    })
    .where(eq(contactPersons.id, id));
}

export async function deleteContactPerson(id: number) {
  await requireAdminSession();
  await db.delete(contactPersons).where(eq(contactPersons.id, id));
}
