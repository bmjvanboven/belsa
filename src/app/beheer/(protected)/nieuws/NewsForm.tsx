"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Textarea, Checkbox } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { newsSchema, type NewsFormValues } from "./validation";
import { createNews, updateNews } from "./actions";

export function NewsForm({
  newsId,
  defaultValues,
}: {
  newsId?: number;
  defaultValues?: NewsFormValues;
}) {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewsFormValues>({
    resolver: zodResolver(newsSchema),
    defaultValues: defaultValues ?? {
      title: "",
      slug: "",
      tag: "",
      club: "",
      excerpt: "",
      body: "",
      published: true,
    },
  });

  async function onSubmit(values: NewsFormValues) {
    setServerError(null);
    try {
      if (newsId) {
        await updateNews(newsId, values);
      } else {
        await createNews(values);
      }
      router.push("/beheer/nieuws");
      router.refresh();
    } catch {
      setServerError("Opslaan is mislukt. Probeer het opnieuw.");
    }
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      {serverError && <Alert tone="error">{serverError}</Alert>}
      <Input label="Titel" required error={errors.title?.message} {...register("title")} />
      <Input
        label="Slug"
        required
        help="Wordt gebruikt in de URL, bijv. nieuwe-padelbanen-geopend"
        error={errors.slug?.message}
        {...register("slug")}
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input label="Categorie" required help="Bijv. Voetbal, Sportpark" error={errors.tag?.message} {...register("tag")} />
        <Input label="Club" required help="Bijv. RKSV Liessel, Belsa" error={errors.club?.message} {...register("club")} />
      </div>
      <Textarea label="Samenvatting" required rows={2} error={errors.excerpt?.message} {...register("excerpt")} />
      <Textarea label="Tekst" required rows={8} error={errors.body?.message} {...register("body")} />
      <Checkbox label="Gepubliceerd" {...register("published")} />
      <Button type="submit" variant="primary" disabled={isSubmitting} className="self-start">
        {isSubmitting ? "Bezig met opslaan…" : "Opslaan"}
      </Button>
    </form>
  );
}
