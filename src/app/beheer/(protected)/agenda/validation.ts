import { z } from "zod";

export const agendaItemSchema = z.object({
  type: z.enum(["bestuurskamer", "kantine"]),
  title: z.string().min(1, "Titel is verplicht"),
  date: z.string().min(1, "Datum is verplicht"),
  startTime: z.string().min(1, "Starttijd is verplicht"),
  endTime: z.string().optional().or(z.literal("")),
  reservedBy: z.string().optional().or(z.literal("")),
  notes: z.string().optional().or(z.literal("")),
});

export type AgendaItemFormValues = z.infer<typeof agendaItemSchema>;
