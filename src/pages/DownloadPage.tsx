import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setDemoBypass } from "../components/InstallGuard";
import { appName, brand, download } from "../lib/copy";
import { isAndroid, isIos, isStandalonePwa } from "../lib/device";

const HERO_IMAGE = "/hero-inicial.png";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

function HeroBanner({ compact }: { compact?: boolean }) {
  return (
    <div
      className={`relative w-full overflow-hidden ${compact ? "h-40" : "h-52"}`}
    >
      <img
        src={HERO_IMAGE}
        alt="Casal no casamento"
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-black/20" />
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 text-center">
        <img
          src="/agape-logo.jpg"
          alt={brand.cerimonial}
          className={`mx-auto object-contain drop-shadow-md ${compact ? "mb-2 h-14" : "mb-3 h-16"}`}
        />
        <p className="font-display text-2xl text-gold-deep drop-shadow-sm">
          {appName.short}
        </p>
        <p className="text-xs tracking-wide text-gold">{brand.byline}</p>
      </div>
    </div>
  );
}

export function DownloadPage() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const installed = isStandalonePwa();

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
  };

  if (installed) {
    return (
      <div className="flex min-h-dvh flex-col bg-cream">
        <HeroBanner compact />
        <div className="flex flex-1 flex-col items-center px-6 py-8 text-center">
          <h1 className="text-2xl text-gold-deep">{download.installedTitle}</h1>
          <p className="mt-2 text-ink-muted">{download.installedBody}</p>
          <Link
            to="/app/eventos"
            className="btn-gold mt-8 w-full max-w-xs rounded-xl px-6 py-4 text-lg"
          >
            {download.openApp}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col bg-cream">
      <HeroBanner />

      <div className="flex-1 overflow-y-auto px-5 pb-8 pt-4">
        <p className="text-center text-base text-gold-deep">{download.tagline}</p>
        <p className="mt-1 text-center text-sm text-ink-muted">
          {download.subtitle}
        </p>

        <div className="card-brand mt-6 rounded-2xl p-5">
          <h2 className="text-lg text-gold-deep">{download.installTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {download.installBody}
          </p>

          {deferredPrompt && (
            <button
              type="button"
              onClick={handleInstall}
              className="btn-gold mt-4 w-full rounded-xl py-4 text-lg"
            >
              {download.installButton}
            </button>
          )}

          <p className="mt-4 text-center text-xs text-ink-muted/70">
            {download.installHint}
          </p>
        </div>

        {isAndroid() && (
          <section className="card-brand mt-5 rounded-2xl p-5">
            <h3 className="text-gold-deep">Android (Chrome)</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-ink-muted">
              <li>Toque nos três pontinhos do navegador</li>
              <li>
                Selecione &quot;Instalar app&quot; ou &quot;Adicionar à tela
                inicial&quot;
              </li>
              <li>Confirme e abra pelo ícone na tela inicial</li>
            </ol>
          </section>
        )}

        {isIos() && (
          <section className="card-brand mt-5 rounded-2xl p-5">
            <h3 className="text-gold-deep">iPhone (Safari)</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-ink-muted">
              <li>Toque no ícone Compartilhar</li>
              <li>Role e toque em &quot;Adicionar à Tela de Início&quot;</li>
              <li>Toque em Adicionar e abra pelo ícone {appName.short}</li>
            </ol>
          </section>
        )}

        {!isAndroid() && !isIos() && (
          <section className="card-brand mt-5 rounded-2xl p-5">
            <h3 className="text-gold-deep">Como instalar</h3>
            <p className="mt-2 text-sm text-ink-muted">
              Abra este link no celular (Chrome ou Safari) e use a opção de
              instalar ou adicionar à tela inicial.
            </p>
          </section>
        )}

        <button
          type="button"
          onClick={() => {
            setDemoBypass();
            window.location.href = "/app/eventos";
          }}
          className="mt-8 block w-full text-center text-sm text-gold underline"
        >
          {download.demoLink}
        </button>
      </div>
    </div>
  );
}
