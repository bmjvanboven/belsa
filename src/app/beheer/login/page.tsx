import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { SiteLock } from "@/components/SiteLock";
import { LoginForm } from "./LoginForm";

export default async function BeheerLoginPage() {
  // Runs and (if needed) redirects before SiteLock is ever constructed below,
  // so this stays a real HTTP redirect rather than a client-only one.
  const session = await auth();
  if (session) redirect("/beheer");

  return (
    <SiteLock>
      <section className="bg-surface-sunken py-16">
        <Container className="max-w-[420px]">
          <div className="rounded-lg border border-border-default bg-surface-card p-8 shadow-md">
            <Badge tone="dark">Beheer</Badge>
            <h1 className="mt-4 text-3xl">Inloggen</h1>
            <p className="mt-2 text-sm text-fg-secondary">Alleen voor bestuur en beheerders van BELSA.</p>
            <div className="mt-6">
              <LoginForm />
            </div>
          </div>
        </Container>
      </section>
    </SiteLock>
  );
}
