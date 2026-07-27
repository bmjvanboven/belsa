"use server";

import { db } from "@/db";
import { downloads } from "@/db/schema";
import { eq } from "drizzle-orm";
import { requireAdminSession } from "@/lib/auth-helpers";
import { downloadSchema, type DownloadFormValues } from "./validation";

export async function createDownload(values: DownloadFormValues) {
  await requireAdminSession();
  const parsed = downloadSchema.parse(values);
  await db.insert(downloads).values(parsed);
}

export async function updateDownload(id: number, values: DownloadFormValues) {
  await requireAdminSession();
  const parsed = downloadSchema.parse(values);
  await db
    .update(downloads)
    .set({ ...parsed, updatedAt: new Date() })
    .where(eq(downloads.id, id));
}

export async function deleteDownload(id: number) {
  await requireAdminSession();
  await db.delete(downloads).where(eq(downloads.id, id));
}
