import { redirect } from "next/navigation";
import { auth, signOut } from "@/auth";
import { Container } from "@/components/layout/Container";

export default async function BeheerProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) redirect("/beheer/login");

  return (
    <div className="min-h-[60vh]">
      <div className="border-b border-border-default bg-black-900 text-white">
        <Container className="flex flex-wrap items-center justify-between gap-3 py-4">
          <div>
            <div className="font-display font-bold text-lg">Beheer</div>
            <div className="text-sm text-white/60">Ingelogd als {session.user?.name ?? session.user?.email}</div>
          </div>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button
              type="submit"
              className="rounded-pill border-2 border-white/30 px-3.5 py-2 font-display text-sm font-bold text-white transition-colors duration-150 hover:border-white"
            >
              Uitloggen
            </button>
          </form>
        </Container>
      </div>
      <Container className="py-10">{children}</Container>
    </div>
  );
}
