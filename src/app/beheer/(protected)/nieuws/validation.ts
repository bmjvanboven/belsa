import { z } from "zod";

export const newsSchema = z.object({
  title: z.string().min(1, "Titel is verplicht"),
  slug: z
    .string()
    .min(1, "Slug is verplicht")
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Alleen kleine letters, cijfers en streepjes"),
  tag: z.string().min(1, "Categorie is verplicht"),
  club: z.string().min(1, "Club is verplicht"),
  excerpt: z.string().min(1, "Samenvatting is verplicht"),
  body: z.string().min(1, "Tekst is verplicht"),
  published: z.boolean(),
});

export type NewsFormValues = z.infer<typeof newsSchema>;
