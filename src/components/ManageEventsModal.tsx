import { bottomNav } from "../lib/copy";

interface ManageEventsModalProps {
  open: boolean;
  onClose: () => void;
}

export function ManageEventsModal({ open, onClose }: ManageEventsModalProps) {
  if (!open) return null;

  const { manageModal: m } = bottomNav;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/45 p-4 backdrop-blur-[2px] sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="manage-events-title"
      onClick={onClose}
    >
      <div
        className="card-brand w-full max-w-sm animate-[slideUp_0.25s_ease-out] rounded-2xl p-6 shadow-xl sm:animate-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3">
          <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-medium tracking-wide text-gold-deep">
            {m.badge}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink-muted active:bg-cream-dark"
            aria-label="Fechar"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-4 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream-dark">
            <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        <h2 id="manage-events-title" className="mt-4 text-center text-lg text-gold-deep">
          {m.title}
        </h2>

        <p className="mt-3 text-center text-sm leading-relaxed text-ink-muted">
          {m.lead}
        </p>

        <div className="mt-4 rounded-xl border border-gold/20 bg-cream/80 px-4 py-3">
          <p className="text-center text-sm leading-relaxed text-ink">
            {m.focus}
          </p>
        </div>

        <p className="mt-3 text-center text-xs text-gold">{m.soon}</p>

        <button
          type="button"
          onClick={onClose}
          className="btn-gold mt-6 w-full rounded-xl py-3.5 text-base"
        >
          {m.dismiss}
        </button>
      </div>
    </div>
  );
}
