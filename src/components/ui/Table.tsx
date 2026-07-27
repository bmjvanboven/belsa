import type { ReactNode } from "react";

export function Table({
  columns,
  rows,
}: {
  columns: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border-default">
      <table className="w-full border-collapse font-body text-sm">
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th
                key={i}
                className="border-b border-border-default bg-gray-100 px-4 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-fg-secondary"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-border-default last:border-b-0">
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 text-fg-primary">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
