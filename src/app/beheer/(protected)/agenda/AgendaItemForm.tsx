"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Textarea, Select } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { agendaItemSchema, type AgendaItemFormValues } from "./validation";
import { createAgendaItem, updateAgendaItem } from "./actions";

export function AgendaItemForm({
  itemId,
  defaultValues,
}: {
  itemId?: number;
  defaultValues?: AgendaItemFormValues;
}) {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AgendaItemFormValues>({
    resolver: zodResolver(agendaItemSchema),
    defaultValues: defaultValues ?? {
      type: "bestuurskamer",
      title: "",
      date: "",
      startTime: "",
      endTime: "",
      reservedBy: "",
      notes: "",
    },
  });

  async function onSubmit(values: AgendaItemFormValues) {
    setServerError(null);
    try {
      if (itemId) {
        await updateAgendaItem(itemId, values);
      } else {
        await createAgendaItem(values);
      }
      router.push("/beheer/agenda");
      router.refresh();
    } catch {
      setServerError("Opslaan is mislukt. Probeer het opnieuw.");
    }
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      {serverError && <Alert tone="error">{serverError}</Alert>}
      <Select
        label="Type"
        required
        options={[
          { value: "bestuurskamer", label: "Bestuurskamer" },
          { value: "kantine", label: "Kantine" },
        ]}
        {...register("type")}
      />
      <Input label="Titel" required error={errors.title?.message} {...register("title")} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Input label="Datum" type="date" required error={errors.date?.message} {...register("date")} />
        <Input label="Starttijd" type="time" required error={errors.startTime?.message} {...register("startTime")} />
        <Input label="Eindtijd" type="time" error={errors.endTime?.message} {...register("endTime")} />
      </div>
      <Input label="Gereserveerd door" help="Bijv. RKSV Liessel, Belsa" {...register("reservedBy")} />
      <Textarea label="Notities" rows={3} {...register("notes")} />
      <Button type="submit" variant="primary" disabled={isSubmitting} className="self-start">
        {isSubmitting ? "Bezig met opslaan…" : "Opslaan"}
      </Button>
    </form>
  );
}
