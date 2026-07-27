import { NewsForm } from "../NewsForm";

export default function NieuwNewsPage() {
  return (
    <div>
      <h1>Nieuw nieuwsbericht</h1>
      <div className="mt-6 max-w-2xl">
        <NewsForm />
      </div>
    </div>
  );
}
