"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Textarea, Checkbox } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { tenantSchema, type TenantFormValues } from "./validation";
import { createTenant, updateTenant } from "./actions";

export function TenantForm({
  tenantId,
  defaultValues,
}: {
  tenantId?: number;
  defaultValues?: TenantFormValues;
}) {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TenantFormValues>({
    resolver: zodResolver(tenantSchema),
    defaultValues: defaultValues ?? {
      name: "",
      slug: "",
      sport: "",
      summary: "",
      body: "",
      website: "",
      sortOrder: 0,
      published: true,
    },
  });

  async function onSubmit(values: TenantFormValues) {
    setServerError(null);
    try {
      if (tenantId) {
        await updateTenant(tenantId, values);
      } else {
        await createTenant(values);
      }
      router.push("/beheer/huurders");
      router.refresh();
    } catch {
      setServerError("Opslaan is mislukt. Probeer het opnieuw.");
    }
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      {serverError && <Alert tone="error">{serverError}</Alert>}
      <Input label="Naam" required help="Bijv. RKSV Liessel" error={errors.name?.message} {...register("name")} />
      <Input
        label="Slug"
        required
        help="Wordt gebruikt in de URL, bijv. rksv-liessel"
        error={errors.slug?.message}
        {...register("slug")}
      />
      <Input label="Sport" required help="Bijv. Voetbal, Volleybal" error={errors.sport?.message} {...register("sport")} />
      <Textarea
        label="Samenvatting"
        required
        rows={2}
        help="Korte tekst op de overzichtspagina"
        error={errors.summary?.message}
        {...register("summary")}
      />
      <Textarea
        label="Tekst"
        required
        rows={8}
        help="Volledige tekst op de detailpagina van deze huurder"
        error={errors.body?.message}
        {...register("body")}
      />
      <Input
        label="Website"
        help="Optioneel, bijv. https://rksvliessel.nl"
        error={errors.website?.message}
        {...register("website")}
      />
      <Input
        label="Volgorde"
        type="number"
        help="Bepaalt de volgorde op de huurderspagina (laag = bovenaan)"
        error={errors.sortOrder?.message}
        {...register("sortOrder", { valueAsNumber: true })}
      />
      <Checkbox label="Gepubliceerd" {...register("published")} />
      <Button type="submit" variant="primary" disabled={isSubmitting} className="self-start">
        {isSubmitting ? "Bezig met opslaan…" : "Opslaan"}
      </Button>
    </form>
  );
}
