import { BackLink } from "@/components/admin/BackLink";
import { TenantForm } from "../TenantForm";

export default function NieuweHuurderPage() {
  return (
    <div>
      <BackLink href="/beheer/huurders" label="Huurders" />
      <h1>Nieuwe huurder</h1>
      <div className="mt-6 max-w-2xl">
        <TenantForm />
      </div>
    </div>
  );
}
