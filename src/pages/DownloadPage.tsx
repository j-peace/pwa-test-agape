import { useEffect, useState } from "react";
import { appName, brand, download } from "../lib/copy";
import { isAndroid, isIos, isMobile, isStandalonePwa } from "../lib/device";

const HERO_IMAGE = "/hero-inicial.png";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

function HeroBanner({ compact }: { compact?: boolean }) {
  return (
    <div
      className={`relative w-full overflow-hidden ${compact ? "h-36" : "h-52"}`}
    >
      <img
        src={HERO_IMAGE}
        alt="Casal no casamento"
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/50 to-black/15" />
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 text-center">
        <img
          src="/agape-logo.jpg"
          alt={brand.cerimonial}
          className={`mx-auto object-contain drop-shadow-md ${compact ? "mb-2 h-12" : "mb-3 h-16"}`}
        />
        <p className="font-display text-2xl text-gold-deep drop-shadow-sm">
          {appName.short}
        </p>
        <p className="text-xs tracking-wide text-gold">{brand.byline}</p>
      </div>
    </div>
  );
}

function StepCards({
  steps,
}: {
  steps: { title: string; detail: string }[] | string[];
}) {
  return (
    <ol className="mt-4 space-y-3">
      {steps.map((step, i) => {
        const title = typeof step === "string" ? step : step.title;
        const detail = typeof step === "string" ? undefined : step.detail;
        return (
          <li key={i} className="card-brand flex gap-4 rounded-xl p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-sm font-medium text-gold-deep">
              {i + 1}
            </span>
            <div className="min-w-0 text-left">
              <p className="text-gold-deep">{title}</p>
              {detail && (
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {detail}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function PostInstallScreen() {
  return (
    <div className="flex min-h-dvh flex-col bg-cream">
      <HeroBanner compact />
      <div className="flex-1 overflow-y-auto px-5 pb-10 pt-5">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success-bg text-2xl text-success">
            ✓
          </div>
          <h1 className="text-xl text-gold-deep">{download.postInstallTitle}</h1>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {download.postInstallBody}
          </p>
        </div>
        <StepCards steps={download.postInstallSteps} />
      </div>
    </div>
  );
}

function AndroidInstallScreen({
  deferredPrompt,
  onInstall,
  justInstalled,
}: {
  deferredPrompt: BeforeInstallPromptEvent | null;
  onInstall: () => void;
  justInstalled: boolean;
}) {
  if (justInstalled) {
    return <PostInstallScreen />;
  }

  return (
    <div className="flex min-h-dvh flex-col bg-cream">
      <HeroBanner />
      <div className="flex-1 overflow-y-auto px-5 pb-10 pt-4">
        <p className="text-center text-base text-gold-deep">{download.tagline}</p>
        <p className="mt-2 text-center text-sm text-ink-muted">
          {download.browserBlocked}
        </p>

        <div className="card-brand mt-6 rounded-2xl p-5 text-center">
          {deferredPrompt ? (
            <>
              <button
                type="button"
                onClick={onInstall}
                className="btn-gold w-full rounded-xl py-4 text-lg"
              >
                {download.androidInstallButton}
              </button>
              <p className="mt-3 text-xs text-ink-muted">
                {download.androidInstallHint}
              </p>
            </>
          ) : (
            <>
              <p className="text-sm text-ink-muted">
                Preparando instalação… Se não aparecer o botão em instantes,
                use o menu do Chrome abaixo.
              </p>
              <section className="mt-5 text-left">
                <h3 className="text-sm text-gold-deep">
                  {download.androidFallbackTitle}
                </h3>
                <StepCards steps={download.androidFallbackSteps} />
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function IosInstallScreen() {
  return (
    <div className="flex min-h-dvh flex-col bg-cream">
      <HeroBanner />
      <div className="flex-1 overflow-y-auto px-5 pb-10 pt-4">
        <p className="text-center text-base text-gold-deep">{download.tagline}</p>
        <p className="mt-2 text-center text-sm text-ink-muted">
          {download.browserBlocked}
        </p>

        <div className="card-brand mt-5 rounded-2xl p-4">
          <h2 className="text-center text-lg text-gold-deep">
            Instale no iPhone
          </h2>
          <p className="mt-2 text-center text-xs text-ink-muted">
            Siga os passos no Safari — depois abra pelo ícone, não pelo navegador
          </p>
          <StepCards steps={download.iosSteps} />
        </div>
      </div>
    </div>
  );
}

function DesktopScreen() {
  return (
    <div className="flex min-h-dvh flex-col bg-cream">
      <HeroBanner />
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-10 text-center">
        <h1 className="text-xl text-gold-deep">{download.desktopTitle}</h1>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
          {download.desktopBody}
        </p>
        <p className="mt-6 text-xs text-ink-muted/80">{download.subtitle}</p>
      </div>
    </div>
  );
}

export function DownloadPage() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [justInstalled, setJustInstalled] = useState(false);

  useEffect(() => {
    if (isStandalonePwa()) return;

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    const onInstalled = () => setJustInstalled(true);

    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    if (outcome === "accepted") {
      setJustInstalled(true);
    }
  };

  if (isStandalonePwa()) {
    return null;
  }

  if (justInstalled) {
    return <PostInstallScreen />;
  }

  if (!isMobile()) {
    return <DesktopScreen />;
  }

  if (isIos()) {
    return <IosInstallScreen />;
  }

  if (isAndroid()) {
    return (
      <AndroidInstallScreen
        deferredPrompt={deferredPrompt}
        onInstall={handleInstall}
        justInstalled={justInstalled}
      />
    );
  }

  return <IosInstallScreen />;
}
