import { AppShell } from "../components/AppShell";
import { brand, settings } from "../lib/copy";
import { resetDemo } from "../lib/storage";

export function SettingsPage() {
  return (
    <AppShell title={settings.screenTitle}>
      <div className="px-4 py-6 pb-4">
        <section className="card-brand mb-6 rounded-2xl p-4">
          <h2 className="text-sm text-gold-deep">{settings.account}</h2>
          <div className="mt-3 flex items-center gap-3">
            <img
              src="/agape-logo.jpg"
              alt=""
              className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/30"
            />
            <div>
              <p className="text-gold-deep">{brand.cerimonial}</p>
              <p className="text-xs text-ink-muted">{settings.demo}</p>
            </div>
          </div>
        </section>

        <section className="card-brand mb-6 overflow-hidden rounded-2xl">
          <SettingsRow label={settings.notify} hint="Em breve" disabled />
          <SettingsRow label={settings.sound} hint="Ativado (demo)" />
          <SettingsRow label={settings.vibrate} hint="Ativado (demo)" />
        </section>

        <section className="card-brand mb-6 overflow-hidden rounded-2xl">
          <SettingsRow label={settings.readers} hint={settings.readersHint} disabled />
          <SettingsRow label={settings.emailBrand} hint="Em breve" disabled />
        </section>

        <section className="rounded-2xl border-2 border-warn/50 bg-warn-bg p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-warn">
            {settings.demo}
          </p>
          <p className="mt-1 text-sm text-ink-muted">{settings.resetHint}</p>
          <button
            type="button"
            onClick={() => {
              if (confirm(settings.resetConfirm)) {
                resetDemo();
                alert(settings.resetDone);
              }
            }}
            className="mt-4 w-full rounded-xl border-2 border-warn bg-white py-4 text-base font-medium text-warn shadow-md active:scale-[0.98]"
          >
            ↺ {settings.reset}
          </button>
        </section>

        <p className="mt-6 text-center text-xs text-ink-muted/70">
          {settings.footer}
        </p>
      </div>
    </AppShell>
  );
}

function SettingsRow({
  label,
  hint,
  disabled,
}: {
  label: string;
  hint: string;
  disabled?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between border-b border-gold/10 px-4 py-3 last:border-0 ${
        disabled ? "opacity-50" : ""
      }`}
    >
      <div>
        <p className="text-sm text-ink">{label}</p>
        <p className="text-xs text-ink-muted">{hint}</p>
      </div>
      <span className="text-gold/50">›</span>
    </div>
  );
}
