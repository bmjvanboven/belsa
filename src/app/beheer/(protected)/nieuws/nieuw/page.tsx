import { BackLink } from "@/components/admin/BackLink";
import { NewsForm } from "../NewsForm";

export default function NieuwNewsPage() {
  return (
    <div>
      <BackLink href="/beheer/nieuws" label="Nieuws" />
      <h1>Nieuw nieuwsbericht</h1>
      <div className="mt-6 max-w-2xl">
        <NewsForm />
      </div>
    </div>
  );
}
