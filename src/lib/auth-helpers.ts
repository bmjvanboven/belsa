import "server-only";
import { auth } from "@/auth";

export async function requireAdminSession() {
  const session = await auth();
  if (!session) {
    throw new Error("Niet geautoriseerd.");
  }
  return session;
}
