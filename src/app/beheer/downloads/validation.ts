import { z } from "zod";

export const downloadSchema = z.object({
  title: z.string().min(1, "Titel is verplicht"),
  filename: z.string().min(1, "Bestandsnaam is verplicht"),
  url: z.string().min(1, "Link is verplicht"),
  category: z.string().min(1, "Categorie is verplicht"),
});

export type DownloadFormValues = z.infer<typeof downloadSchema>;
