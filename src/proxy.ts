import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Site-wide staging gate. Set SITE_PASSWORD (e.g. in Vercel project env vars) to
// require HTTP Basic Auth on every request. Leave it unset for open local dev.
// At go-live, remove SITE_PASSWORD from the environment to lift the gate — this
// also switches robots.ts / metadata back to indexable (see there).
export function proxy(request: NextRequest) {
  const sitePassword = process.env.SITE_PASSWORD;
  if (!sitePassword) return NextResponse.next();

  const siteUsername = process.env.SITE_USERNAME ?? "belsa";
  const authHeader = request.headers.get("authorization");

  if (authHeader?.startsWith("Basic ")) {
    const decoded = Buffer.from(authHeader.slice("Basic ".length), "base64").toString("utf-8");
    const separatorIndex = decoded.indexOf(":");
    const user = decoded.slice(0, separatorIndex);
    const pass = decoded.slice(separatorIndex + 1);
    if (user === siteUsername && pass === sitePassword) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="BELSA", charset="UTF-8"' },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
