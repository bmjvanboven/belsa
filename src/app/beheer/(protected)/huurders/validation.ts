import { z } from "zod";

export const tenantSchema = z.object({
  name: z.string().min(1, "Naam is verplicht"),
  slug: z
    .string()
    .min(1, "Slug is verplicht")
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Alleen kleine letters, cijfers en streepjes"),
  sport: z.string().min(1, "Sport is verplicht"),
  summary: z.string().min(1, "Samenvatting is verplicht"),
  body: z.string().min(1, "Tekst is verplicht"),
  website: z.string().url("Voer een geldige URL in").optional().or(z.literal("")),
  sortOrder: z.number().int(),
  published: z.boolean(),
});

export type TenantFormValues = z.infer<typeof tenantSchema>;
