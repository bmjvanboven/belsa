import type { MetadataRoute } from "next";

// Mirrors the SITE_PASSWORD gate in src/proxy.ts: while the staging password is
// set, tell crawlers to stay away too. Remove SITE_PASSWORD at go-live to open
// both up together.
// Force this to be evaluated per-request instead of baked in at build time,
// so it always reflects the current SITE_PASSWORD value.
export const dynamic = "force-dynamic";

export default function robots(): MetadataRoute.Robots {
  const locked = !!process.env.SITE_PASSWORD;

  return {
    rules: {
      userAgent: "*",
      disallow: locked ? "/" : undefined,
      allow: locked ? undefined : "/",
    },
  };
}
