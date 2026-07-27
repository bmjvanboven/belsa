"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/nav";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

function isItemActive(pathname: string, item: (typeof mainNav)[number]) {
  if (item.href) return pathname === item.href || pathname.startsWith(item.href + "/");
  return (item.children ?? []).some((c) => pathname === c.href || pathname.startsWith(c.href + "/"));
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-black-900">
      <Container className="flex items-center justify-between gap-6 py-3.5">
        <Link href="/" className="flex items-center shrink-0" onClick={() => setMobileOpen(false)}>
          <Image
            src="/logos/logo-wordmark-reversed.svg"
            alt="BELSA"
            width={140}
            height={47}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {mainNav.map((item) => {
            const active = isItemActive(pathname, item);
            if (!item.children) {
              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  className={[
                    "font-body font-bold text-sm pb-1 border-b-2 no-underline transition-colors duration-150",
                    active ? "border-primary text-primary" : "border-transparent text-white hover:text-primary",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            }
            const open = openDropdown === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => setOpenDropdown(open ? null : item.label)}
                  className={[
                    "flex items-center gap-1 font-body font-bold text-sm pb-1 border-b-2 transition-colors duration-150",
                    active ? "border-primary text-primary" : "border-transparent text-white hover:text-primary",
                  ].join(" ")}
                  aria-expanded={open}
                >
                  {item.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {open && (
                  <div className="absolute left-0 top-full pt-3 min-w-[220px]">
                    <div className="rounded-lg border border-border-on-dark bg-black-900 shadow-lg py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 no-underline hover:bg-black-800"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <span className="block font-body font-bold text-sm text-white">{child.label}</span>
                          {child.description && (
                            <span className="block text-xs text-white/60 mt-0.5">{child.description}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/beheer" variant="primary" size="sm">
            Beheer
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden text-white p-2 -mr-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Sluit menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border-on-dark bg-black-900">
          <Container className="py-4 flex flex-col gap-1">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.label} className="py-2">
                  <div className="font-display font-bold text-xs uppercase tracking-wide text-white/50 px-1 mb-1">
                    {item.label}
                  </div>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-1 py-2 no-underline font-body font-bold text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="px-1 py-2.5 no-underline font-body font-bold text-white border-b border-border-on-dark last:border-b-0"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-3">
              <Button href="/beheer" variant="primary" size="sm" className="w-full justify-center">
                Beheer
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
