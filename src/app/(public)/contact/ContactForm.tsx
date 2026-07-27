"use client";

import { useState } from "react";
import { Input, Textarea } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <Alert tone="success" title="Bedankt voor je bericht!">
        We nemen zo snel mogelijk contact met je op.
      </Alert>
    );
  }

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <Input label="Naam" name="naam" placeholder="Je naam" required />
      <Input label="E-mailadres" name="email" type="email" placeholder="jij@voorbeeld.nl" required />
      <Textarea label="Bericht" name="bericht" placeholder="Waar kunnen we je mee helpen?" required />
      <Button type="submit" variant="primary" className="self-start">
        Versturen
      </Button>
    </form>
  );
}
