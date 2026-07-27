"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { downloadSchema, type DownloadFormValues } from "./validation";
import { createDownload, updateDownload } from "./actions";

export function DownloadForm({
  downloadId,
  defaultValues,
}: {
  downloadId?: number;
  defaultValues?: DownloadFormValues;
}) {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DownloadFormValues>({
    resolver: zodResolver(downloadSchema),
    defaultValues: defaultValues ?? { title: "", filename: "", url: "", category: "" },
  });

  async function onSubmit(values: DownloadFormValues) {
    setServerError(null);
    try {
      if (downloadId) {
        await updateDownload(downloadId, values);
      } else {
        await createDownload(values);
      }
      router.push("/beheer/downloads");
      router.refresh();
    } catch {
      setServerError("Opslaan is mislukt. Probeer het opnieuw.");
    }
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      {serverError && <Alert tone="error">{serverError}</Alert>}
      <Input label="Titel" required error={errors.title?.message} {...register("title")} />
      <Input label="Categorie" required help="Bijv. Formulieren, Reglementen" error={errors.category?.message} {...register("category")} />
      <Input label="Bestandsnaam" required help="Bijv. reglement.pdf" error={errors.filename?.message} {...register("filename")} />
      <Input
        label="Link"
        required
        help="URL waar het bestand te downloaden is"
        error={errors.url?.message}
        {...register("url")}
      />
      <Button type="submit" variant="primary" disabled={isSubmitting} className="self-start">
        {isSubmitting ? "Bezig met opslaan…" : "Opslaan"}
      </Button>
    </form>
  );
}
