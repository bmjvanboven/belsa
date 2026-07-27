"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export function ConfirmDeleteButton({
  action,
  confirmMessage = "Weet je zeker dat je dit wilt verwijderen?",
}: {
  action: () => Promise<void>;
  confirmMessage?: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        disabled={isPending}
        onClick={() => {
          if (!window.confirm(confirmMessage)) return;
          setError(null);
          startTransition(async () => {
            try {
              await action();
              router.refresh();
            } catch {
              setError("Verwijderen is mislukt.");
            }
          });
        }}
        className="font-body font-bold text-sm text-error hover:underline disabled:opacity-50"
      >
        {isPending ? "Bezig…" : "Verwijderen"}
      </button>
      {error && <span className="text-xs text-error">{error}</span>}
    </div>
  );
}
