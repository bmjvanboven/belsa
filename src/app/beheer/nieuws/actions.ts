"use server";

import { db } from "@/db";
import { news } from "@/db/schema";
import { eq } from "drizzle-orm";
import { newsSchema, type NewsFormValues } from "./validation";

export async function createNews(values: NewsFormValues) {
  const parsed = newsSchema.parse(values);
  await db.insert(news).values(parsed);
}

export async function updateNews(id: number, values: NewsFormValues) {
  const parsed = newsSchema.parse(values);
  await db
    .update(news)
    .set({ ...parsed, updatedAt: new Date() })
    .where(eq(news.id, id));
}

export async function deleteNews(id: number) {
  await db.delete(news).where(eq(news.id, id));
}
