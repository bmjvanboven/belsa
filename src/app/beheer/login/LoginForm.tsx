"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

const loginSchema = z.object({
  email: z.string().min(1, "E-mailadres is verplicht").email("Voer een geldig e-mailadres in"),
  password: z.string().min(1, "Wachtwoord is verplicht"),
});

type LoginValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({ resolver: zodResolver(loginSchema) });

  async function onSubmit(values: LoginValues) {
    setServerError(null);
    const result = await signIn("credentials", { ...values, redirect: false });
    if (result?.error) {
      setServerError("E-mailadres of wachtwoord klopt niet.");
      return;
    }
    router.push("/beheer");
    router.refresh();
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      {serverError && <Alert tone="error">{serverError}</Alert>}
      <Input label="E-mailadres" type="email" required error={errors.email?.message} {...register("email")} />
      <Input label="Wachtwoord" type="password" required error={errors.password?.message} {...register("password")} />
      <Button type="submit" variant="primary" disabled={isSubmitting} className="self-start">
        {isSubmitting ? "Bezig met inloggen…" : "Inloggen"}
      </Button>
    </form>
  );
}
