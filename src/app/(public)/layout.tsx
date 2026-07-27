import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SiteLock } from "@/components/SiteLock";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteLock>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </SiteLock>
  );
}
