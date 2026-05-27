import { useEffect, useState } from "react";
import { AppShell } from "../components/AppShell";
import { dashboard } from "../lib/copy";
import { EXPECTED_GUESTS, getState } from "../lib/storage";

export function DashboardPage() {
  const [entered, setEntered] = useState(() => getState().entryCount);

  useEffect(() => {
    const refresh = () => setEntered(getState().entryCount);
    refresh();
    const id = setInterval(refresh, 2000);
    return () => clearInterval(id);
  }, []);

  const pct = Math.min(100, Math.round((entered / EXPECTED_GUESTS) * 100));

  return (
    <AppShell title={dashboard.screenTitle}>
      <div className="px-4 py-6">
        <div className="card-brand rounded-2xl p-6">
          <p className="font-display text-xl text-gold-deep">{dashboard.eventName}</p>
          <p className="mt-2 text-4xl text-gold-deep">
            {entered}
            <span className="text-xl text-ink-muted/60">
              {" "}
              / {EXPECTED_GUESTS}
            </span>
          </p>
          <p className="mt-1 text-sm text-ink-muted">{dashboard.countLabel}</p>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-cream-dark">
            <div
              className="h-full rounded-full bg-gradient-to-r from-gold-light to-gold transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="mt-2 text-right text-sm text-gold">{pct}%</p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-success-bg p-4 text-center">
            <p className="text-2xl text-success">{entered}</p>
            <p className="text-xs text-ink-muted">{dashboard.confirmed}</p>
          </div>
          <div className="rounded-xl bg-cream-dark p-4 text-center">
            <p className="text-2xl text-ink-muted">
              {EXPECTED_GUESTS - entered}
            </p>
            <p className="text-xs text-ink-muted">{dashboard.waiting}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setEntered(getState().entryCount)}
          className="mt-6 w-full rounded-xl border border-gold/35 py-3 text-sm text-gold-deep"
        >
          {dashboard.refresh}
        </button>
      </div>
    </AppShell>
  );
}
