"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { contactPersonSchema, type ContactPersonFormValues } from "./validation";
import { createContactPerson, updateContactPerson } from "./actions";

export function ContactPersonForm({
  personId,
  defaultValues,
}: {
  personId?: number;
  defaultValues?: ContactPersonFormValues;
}) {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactPersonFormValues>({
    resolver: zodResolver(contactPersonSchema),
    defaultValues: defaultValues ?? { name: "", role: "", email: "", phone: "", sortOrder: 0 },
  });

  async function onSubmit(values: ContactPersonFormValues) {
    setServerError(null);
    try {
      if (personId) {
        await updateContactPerson(personId, values);
      } else {
        await createContactPerson(values);
      }
      router.push("/beheer/contacten");
      router.refresh();
    } catch {
      setServerError("Opslaan is mislukt. Probeer het opnieuw.");
    }
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      {serverError && <Alert tone="error">{serverError}</Alert>}
      <Input label="Naam" required error={errors.name?.message} {...register("name")} />
      <Input label="Functie" required help="Bijv. Voorzitter, Secretaris" error={errors.role?.message} {...register("role")} />
      <Input label="E-mailadres" type="email" error={errors.email?.message} {...register("email")} />
      <Input label="Telefoonnummer" error={errors.phone?.message} {...register("phone")} />
      <Input
        label="Volgorde"
        type="number"
        help="Bepaalt de volgorde op de contactenpagina (laag = bovenaan)"
        error={errors.sortOrder?.message}
        {...register("sortOrder", { valueAsNumber: true })}
      />
      <Button type="submit" variant="primary" disabled={isSubmitting} className="self-start">
        {isSubmitting ? "Bezig met opslaan…" : "Opslaan"}
      </Button>
    </form>
  );
}
