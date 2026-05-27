import { Link } from "react-router-dom";
import { AppShell } from "../components/AppShell";
import { wallet } from "../lib/copy";

export function WalletSoonPage() {
  return (
    <AppShell title={wallet.screenTitle}>
      <div className="flex flex-col items-center px-6 py-16 text-center">
        <img
          src="/agape-logo.jpg"
          alt="Ágape"
          className="mb-6 h-20 w-auto"
        />
        <h2 className="font-display text-3xl text-gold-deep">{wallet.title}</h2>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
          {wallet.body}
        </p>
        <div className="mt-8 flex gap-3 opacity-60">
          <span className="rounded-lg bg-cream-dark px-4 py-2 text-xs text-ink-muted">
            Google Wallet
          </span>
          <span className="rounded-lg bg-cream-dark px-4 py-2 text-xs text-ink-muted">
            Apple Wallet
          </span>
        </div>
        <Link to="/" className="btn-gold mt-10 rounded-xl px-8 py-3">
          {wallet.back}
        </Link>
      </div>
    </AppShell>
  );
}
