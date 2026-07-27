import { redirect } from "next/navigation";
import Image from "next/image";
import { auth } from "@/auth";
import { LoginForm } from "./LoginForm";

export default async function BeheerLoginPage() {
  const session = await auth();
  if (session) redirect("/beheer");

  return (
    <div className="flex min-h-screen items-center justify-center bg-black-900 px-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-8 shadow-lg">
        <Image src="/logos/logo-wordmark.svg" alt="BELSA" width={140} height={47} className="h-9 w-auto" />
        <h1 className="mt-4 text-2xl">Inloggen</h1>
        <p className="mt-2 text-sm text-fg-secondary">Alleen voor bestuur en beheerders van BELSA.</p>
        <div className="mt-5">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
