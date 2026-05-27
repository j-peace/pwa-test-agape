import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AppShell } from "../components/AppShell";
import { admin } from "../lib/copy";
import { isMobile } from "../lib/device";

export function AdminPage() {
  const mobile = isMobile();

  useEffect(() => {
    if (mobile) {
      alert(admin.mobileBody);
    }
  }, [mobile]);

  if (mobile) {
    return (
      <AppShell title={admin.mobileTitle} showBack backTo="/app/eventos">
        <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
          <div className="mb-4 text-5xl">💻</div>
          <h2 className="text-xl text-gold-deep">{admin.mobileTitle}</h2>
          <p className="mt-3 text-sm text-ink-muted">{admin.mobileBody}</p>
          <Link
            to="/app/eventos"
            className="btn-gold mt-8 rounded-xl px-6 py-3"
          >
            {admin.back}
          </Link>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell title={admin.demoTitle} showBack backTo="/app/eventos">
      <div className="mx-auto max-w-lg px-4 py-8">
        <p className="mb-6 text-sm text-ink-muted">{admin.demoHint}</p>

        <section className="card-brand mb-6 rounded-2xl p-5">
          <h3 className="text-gold-deep">{admin.newEvent}</h3>
          <input
            type="text"
            placeholder="Nome do evento"
            className="mt-3 w-full rounded-lg border border-gold/20 px-3 py-2 font-serif"
            disabled
          />
          <input
            type="date"
            className="mt-2 w-full rounded-lg border border-gold/20 px-3 py-2"
            disabled
          />
          <button
            type="button"
            disabled
            className="mt-3 w-full rounded-lg bg-gold/40 py-2 text-sm text-white"
          >
            {admin.createDemo}
          </button>
        </section>

        <section className="card-brand rounded-2xl p-5">
          <h3 className="text-gold-deep">{admin.importTitle}</h3>
          <p className="mt-2 text-sm text-ink-muted">{admin.importHint}</p>
          <button
            type="button"
            disabled
            className="mt-4 w-full rounded-lg border-2 border-dashed border-gold/40 py-8 text-sm text-gold"
          >
            {admin.importDemo}
          </button>
        </section>
      </div>
    </AppShell>
  );
}
