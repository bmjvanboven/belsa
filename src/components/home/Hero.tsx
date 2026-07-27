"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type Variant = "geel" | "donker" | "foto";

const variants: { id: Variant; label: string }[] = [
  { id: "geel", label: "1 · Geel" },
  { id: "donker", label: "2 · Donker" },
  { id: "foto", label: "3 · Foto" },
];

function VariantSwitcher({ active, onChange }: { active: Variant; onChange: (v: Variant) => void }) {
  return (
    <div className="absolute right-4 top-4 z-20 flex gap-1 rounded-pill border border-black/10 bg-white/90 p-1 shadow-md backdrop-blur-sm sm:right-6 sm:top-6">
      {variants.map((v) => (
        <button
          key={v.id}
          type="button"
          onClick={() => onChange(v.id)}
          className={[
            "rounded-pill px-3 py-1.5 font-body text-xs font-bold transition-colors duration-150",
            active === v.id ? "bg-black-900 text-white" : "text-fg-secondary hover:bg-gray-100",
          ].join(" ")}
        >
          {v.label}
        </button>
      ))}
    </div>
  );
}

const badgeText = "Sportpark De Smeltkroes";
const title = "Het kloppend hart van sportief Liessel";
const intro =
  "Thuis van RKSV Liessel, Livoc, De Eendracht en Tennisclub Liessel — voor iedereen die van sport en gezelligheid houdt.";

export function Hero() {
  const [variant, setVariant] = useState<Variant>("geel");

  return (
    <section className="relative">
      <VariantSwitcher active={variant} onChange={setVariant} />

      {variant === "geel" && (
        <div className="bg-primary">
          <Container className="flex flex-wrap items-center justify-between gap-8 py-16">
            <div className="max-w-[560px]">
              <Badge tone="dark">{badgeText}</Badge>
              <h1 className="mt-4 text-fg-on-yellow">{title}</h1>
              <p className="mt-4 text-lg text-black-800">{intro}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/agenda/bestuurskamer" variant="secondary">
                  Bekijk agenda
                </Button>
                <Button href="/contact" variant="tertiary">
                  Contact
                </Button>
              </div>
            </div>
            <Image src="/logos/logo-wordmark.svg" alt="BELSA" width={220} height={73} className="h-auto w-[220px]" />
          </Container>
        </div>
      )}

      {variant === "donker" && (
        <div className="bg-black-900">
          <Container className="flex flex-wrap items-center justify-between gap-8 py-16">
            <div className="max-w-[560px]">
              <Badge tone="primary">{badgeText}</Badge>
              <h1 className="mt-4 text-white">{title}</h1>
              <p className="mt-4 text-lg text-white/70">{intro}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/agenda/bestuurskamer" variant="primary">
                  Bekijk agenda
                </Button>
                <Button href="/contact" variant="outline-light">
                  Contact
                </Button>
              </div>
            </div>
            <Image
              src="/logos/logo-wordmark-reversed.svg"
              alt="BELSA"
              width={220}
              height={73}
              className="h-auto w-[220px]"
            />
          </Container>
        </div>
      )}

      {variant === "foto" && (
        <div className="relative min-h-[520px] overflow-hidden bg-black-900">
          <Image
            src="/foto-1.jpg"
            alt="Sportpark De Smeltkroes"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
          <Container className="relative z-10 flex min-h-[520px] flex-col justify-end gap-8 py-16">
            <div className="max-w-[560px]">
              <Badge tone="primary">{badgeText}</Badge>
              <h1 className="mt-4 text-white">{title}</h1>
              <p className="mt-4 text-lg text-white/85">{intro}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/agenda/bestuurskamer" variant="primary">
                  Bekijk agenda
                </Button>
                <Button href="/contact" variant="outline-light">
                  Contact
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </section>
  );
}
