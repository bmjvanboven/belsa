"use server";

import { db } from "@/db";
import { tenants } from "@/db/schema";
import { eq } from "drizzle-orm";
import { requireAdminSession } from "@/lib/auth-helpers";
import { tenantSchema, type TenantFormValues } from "./validation";

export async function createTenant(values: TenantFormValues) {
  await requireAdminSession();
  const parsed = tenantSchema.parse(values);
  await db.insert(tenants).values({ ...parsed, website: parsed.website || null });
}

export async function updateTenant(id: number, values: TenantFormValues) {
  await requireAdminSession();
  const parsed = tenantSchema.parse(values);
  await db
    .update(tenants)
    .set({ ...parsed, website: parsed.website || null, updatedAt: new Date() })
    .where(eq(tenants.id, id));
}

export async function deleteTenant(id: number) {
  await requireAdminSession();
  await db.delete(tenants).where(eq(tenants.id, id));
}
