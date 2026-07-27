import { BackLink } from "@/components/admin/BackLink";
import { DownloadForm } from "../DownloadForm";

export default function NieuwDownloadPage() {
  return (
    <div>
      <BackLink href="/beheer/downloads" label="Downloads" />
      <h1>Nieuw document</h1>
      <div className="mt-6 max-w-2xl">
        <DownloadForm />
      </div>
    </div>
  );
}
