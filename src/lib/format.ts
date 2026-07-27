export function formatAgendaDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("nl-NL", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

export function formatTime(time: string) {
  return time.slice(0, 5);
}

export function formatNewsDate(date: Date | string) {
  return new Date(date).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
