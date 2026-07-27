"use server";

import { db } from "@/db";
import { agendaItems } from "@/db/schema";
import { eq } from "drizzle-orm";
import { requireAdminSession } from "@/lib/auth-helpers";
import { agendaItemSchema, type AgendaItemFormValues } from "./validation";

export async function createAgendaItem(values: AgendaItemFormValues) {
  await requireAdminSession();
  const parsed = agendaItemSchema.parse(values);
  await db.insert(agendaItems).values({
    ...parsed,
    endTime: parsed.endTime || null,
    reservedBy: parsed.reservedBy || null,
    notes: parsed.notes || null,
  });
}

export async function updateAgendaItem(id: number, values: AgendaItemFormValues) {
  await requireAdminSession();
  const parsed = agendaItemSchema.parse(values);
  await db
    .update(agendaItems)
    .set({
      ...parsed,
      endTime: parsed.endTime || null,
      reservedBy: parsed.reservedBy || null,
      notes: parsed.notes || null,
      updatedAt: new Date(),
    })
    .where(eq(agendaItems.id, id));
}

export async function deleteAgendaItem(id: number) {
  await requireAdminSession();
  await db.delete(agendaItems).where(eq(agendaItems.id, id));
}
