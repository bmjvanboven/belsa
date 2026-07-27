import { z } from "zod";

export const contactPersonSchema = z.object({
  name: z.string().min(1, "Naam is verplicht"),
  role: z.string().min(1, "Functie is verplicht"),
  email: z.string().email("Voer een geldig e-mailadres in").optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
  sortOrder: z.number().int(),
});

export type ContactPersonFormValues = z.infer<typeof contactPersonSchema>;
