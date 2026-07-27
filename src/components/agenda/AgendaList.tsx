import { Badge } from "@/components/ui/Badge";
import { Alert } from "@/components/ui/Alert";
import { formatAgendaDate, formatTime } from "@/lib/format";

type AgendaListItem = {
  id: number;
  date: string;
  startTime: string;
  endTime: string | null;
  title: string;
  reservedBy: string | null;
};

export function AgendaList({ items }: { items: AgendaListItem[] }) {
  if (items.length === 0) {
    return (
      <Alert tone="info" title="Nog geen reserveringen">
        Er staan op dit moment geen reserveringen gepland.
      </Alert>
    );
  }

  return (
    <div className="flex flex-col gap-0.5 overflow-hidden rounded-lg border border-border-default">
      {items.map((item, i) => (
        <div
          key={item.id}
          className={["flex flex-wrap items-center gap-3 sm:gap-5 px-5 py-4", i % 2 ? "bg-surface-sunken" : "bg-white"].join(
            " "
          )}
        >
          <div className="w-[90px] font-display font-extrabold text-fg-primary">{formatAgendaDate(item.date)}</div>
          <div className="w-[100px] tabular-nums text-fg-muted">
            {formatTime(item.startTime)}
            {item.endTime && <>–{formatTime(item.endTime)}</>}
          </div>
          <div className="flex-1 min-w-[160px] font-bold">{item.title}</div>
          {item.reservedBy && <Badge tone="neutral">{item.reservedBy}</Badge>}
        </div>
      ))}
    </div>
  );
}
