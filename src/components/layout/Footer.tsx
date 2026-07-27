import Image from "next/image";
import Link from "next/link";
import { footerNav } from "@/lib/nav";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="bg-black-900 text-white/70">
      <Container className="py-12 flex flex-wrap gap-10 justify-between">
        <div className="max-w-[280px]">
          <Image
            src="/logos/logo-wordmark-reversed.svg"
            alt="BELSA"
            width={130}
            height={43}
            className="h-9 w-auto mb-3"
          />
          <p className="text-sm">
            Stichting Beheer en Exploitatie Liesselse Sport Accommodatie — thuis van RKSV Liessel, Livoc, De
            Eendracht en Tennisclub Liessel.
          </p>
        </div>

        <div>
          <div className="font-display font-bold text-xs uppercase tracking-wide text-white/50 mb-3">
            Sportpark
          </div>
          <ul className="flex flex-col gap-2">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 no-underline hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm">
          <div className="font-display font-bold text-xs uppercase tracking-wide text-white/50 mb-3">
            Contact
          </div>
          <p>
            Kloosterstraat 1
            <br />
            5757 Liessel
            <br />
            <a href="mailto:info@sportparkdesmeltkroes.nl" className="text-white/70 hover:text-primary">
              info@sportparkdesmeltkroes.nl
            </a>
          </p>
        </div>
      </Container>

      <div className="border-t border-border-on-dark">
        <Container className="py-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} BELSA — Stichting Beheer en Exploitatie Liesselse Sport
            Accommodatie
          </p>
        </Container>
      </div>
    </footer>
  );
}
