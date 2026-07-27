import type { MetadataRoute } from "next";

// Pre-launch: keep crawlers out. At go-live, flip LOCKED to false (and remove
// the noindex line in src/app/layout.tsx + the <SiteLock> wrapper there).
const LOCKED = true;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: LOCKED ? "/" : undefined,
      allow: LOCKED ? undefined : "/",
    },
  };
}
