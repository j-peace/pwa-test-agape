import { Link } from "react-router-dom";
import { AppShell } from "../components/AppShell";
import { events } from "../lib/copy";

const EVENTS = [
  { id: "marina", title: "Casamento Marina", type: "casamento", soon: true },
  { id: "julia", title: "15 anos — Júlia", type: "festa", soon: true },
  { id: "pedro-ana", title: "Casamento Pedro & Ana", type: "casamento", soon: true },
  { id: "sofia", title: "15 anos — Sofia", type: "festa", soon: true },
  {
    id: "casamento-aline",
    title: "Casamento Aline",
    type: "casamento",
    soon: false,
  },
];

export function EventListPage() {
  return (
    <AppShell title={events.screenTitle}>
      <div className="px-4 py-6">
        <p className="mb-4 text-sm text-ink-muted">{events.hint}</p>
        <ul className="space-y-3">
          {EVENTS.map((ev) =>
            ev.soon ? (
              <li
                key={ev.id}
                className="card-brand rounded-2xl px-4 py-4 opacity-55"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-ink-muted">{ev.title}</p>
                    <p className="text-xs text-ink-muted/70">
                      {ev.type === "casamento" ? "Casamento" : "Festa de 15 anos"}
                    </p>
                  </div>
                  <span className="rounded-full bg-cream-dark px-3 py-1 text-xs text-ink-muted">
                    {events.soon}
                  </span>
                </div>
              </li>
            ) : (
              <li key={ev.id}>
                <Link
                  to={`/app/eventos/${ev.id}`}
                  className="card-brand flex items-center justify-between rounded-2xl border-2 border-gold/50 px-4 py-4 active:bg-cream-dark"
                >
                  <div>
                    <p className="text-lg text-gold-deep">{ev.title}</p>
                    <p className="text-xs text-gold">{events.openHint}</p>
                  </div>
                  <svg
                    className="h-5 w-5 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </AppShell>
  );
}
