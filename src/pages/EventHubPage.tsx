import { useState } from "react";
import { Link } from "react-router-dom";
import { AppShell } from "../components/AppShell";
import { eventHub } from "../lib/copy";
import { getState, setState } from "../lib/storage";

const BASE = "/app/eventos/casamento-aline";

export function EventHubPage() {
  const [offline, setOffline] = useState(() => getState().offlineMode);
  const [showOfflineModal, setShowOfflineModal] = useState(false);

  const toggleOffline = () => {
    if (!offline) {
      setShowOfflineModal(true);
      return;
    }
    setOffline(false);
    setState({ offlineMode: false });
  };

  const confirmOffline = () => {
    setOffline(true);
    setState({ offlineMode: true });
    setShowOfflineModal(false);
  };

  return (
    <AppShell title={eventHub.screenTitle} showBack backTo="/app/eventos">
      <div className="px-4 py-6">
        <div className="card-brand mb-6 rounded-2xl p-4">
          <p className="text-sm text-ink-muted">{eventHub.activeLabel}</p>
          <p className="font-display text-2xl text-gold-deep">
            {eventHub.screenTitle}
          </p>
          <p className="mt-1 text-sm text-ink-muted">{eventHub.activeHint}</p>
        </div>

        <div className="space-y-3">
          <Link
            to={`${BASE}/ler`}
            className="btn-gold flex items-center gap-4 rounded-2xl px-5 py-5"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/25">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <div>
              <p className="text-lg">{eventHub.scanTitle}</p>
              <p className="text-sm text-white/85">{eventHub.scanHint}</p>
            </div>
          </Link>

          <Link
            to={`${BASE}/buscar`}
            className="card-brand flex items-center gap-4 rounded-2xl border-2 border-gold/35 px-5 py-5 active:bg-cream-dark"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream-dark">
              <svg className="h-7 w-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <div>
              <p className="text-lg text-gold-deep">{eventHub.searchTitle}</p>
              <p className="text-sm text-ink-muted">{eventHub.searchHint}</p>
            </div>
          </Link>
        </div>

        <div className="card-brand mt-8 flex items-center justify-between rounded-xl px-4 py-3">
          <div>
            <p className="text-gold-deep">{eventHub.offlineTitle}</p>
            <p className="text-xs text-ink-muted">
              {eventHub.offlineHint(offline)}
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={offline}
            onClick={toggleOffline}
            className={`relative h-8 w-14 rounded-full transition-colors ${
              offline ? "bg-gold" : "bg-cream-dark"
            }`}
          >
            <span
              className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                offline ? "left-7" : "left-1"
              }`}
            />
          </button>
        </div>
      </div>

      {showOfflineModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-4 sm:items-center">
          <div className="card-brand w-full max-w-sm rounded-2xl p-6">
            <h3 className="text-lg text-gold-deep">{eventHub.offlineModalTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {eventHub.offlineModalBody}
            </p>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setShowOfflineModal(false)}
                className="flex-1 rounded-xl border border-gold/30 py-3 text-ink-muted"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={confirmOffline}
                className="btn-gold flex-1 rounded-xl py-3"
              >
                Ativar
              </button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}
