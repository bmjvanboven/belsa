"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/Button";

// Simple client-side staging gate — no env vars, remembers the unlock via
// localStorage. Change SITE_PASSWORD or delete this file + its usage in
// layout.tsx to lift the gate at go-live.
const SITE_PASSWORD = "belsa123";
const STORAGE_KEY = "belsa_site_unlocked";

export function SiteLock({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reading localStorage must happen post-hydration (unavailable during SSR),
    // so an effect is required here rather than a lazy useState initializer.
    if (window.localStorage.getItem(STORAGE_KEY) === "true") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUnlocked(true);
    }
  }, []);

  if (unlocked) {
    return <>{children}</>;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input === SITE_PASSWORD) {
      window.localStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
    } else {
      setError(true);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black-900 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-lg bg-white p-8 shadow-lg">
        <Image src="/logos/logo-wordmark.svg" alt="BELSA" width={140} height={47} className="h-9 w-auto" />
        <p className="mt-4 text-sm text-fg-secondary">
          Deze site is nog niet live. Vul het wachtwoord in om verder te gaan.
        </p>
        <div className="mt-5">
          <Input
            type="password"
            label="Wachtwoord"
            autoFocus
            required
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            error={error ? "Onjuist wachtwoord." : undefined}
          />
        </div>
        <Button type="submit" variant="primary" className="mt-5 w-full justify-center">
          Ontgrendelen
        </Button>
      </form>
    </div>
  );
}
