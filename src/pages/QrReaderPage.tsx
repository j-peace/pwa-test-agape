import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Html5Qrcode } from "html5-qrcode";
import { AppShell } from "../components/AppShell";
import { ResultScreen } from "../components/ResultScreen";
import { scanner as scannerCopy } from "../lib/copy";
import { getState, setState } from "../lib/storage";

const BASE = "/app/eventos/casamento-aline";
const SCANNER_ID = "qr-reader";

export function QrReaderPage() {
  const navigate = useNavigate();
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<"success" | "already" | null>(null);
  const scannedRef = useRef(false);

  useEffect(() => {
    let mounted = true;

    const start = async () => {
      try {
        const scanner = new Html5Qrcode(SCANNER_ID);
        scannerRef.current = scanner;
        await scanner.start(
          { facingMode: "environment" },
          { fps: 10, qrbox: { width: 250, height: 250 } },
          (decodedText) => {
            if (scannedRef.current) return;
            scannedRef.current = true;
            void scanner.stop().then(() => {
              scannerRef.current = null;
            });

            const state = getState();
            if (state.alineCheckedIn) {
              setResult("already");
              return;
            }

            setState({
              alineCheckedIn: true,
              entryCount: state.entryCount + 1,
              lastQr: decodedText,
            });
            setResult("success");
          },
          () => {}
        );
      } catch {
        if (mounted) {
          setError(scannerCopy.cameraError);
        }
      }
    };

    void start();

    return () => {
      mounted = false;
      if (scannerRef.current?.isScanning) {
        void scannerRef.current.stop().catch(() => {});
      }
    };
  }, []);

  if (result === "success") {
    return (
      <ResultScreen type="success" guestName="Aline" backTo={BASE} />
    );
  }

  if (result === "already") {
    return <ResultScreen type="already" backTo={BASE} />;
  }

  return (
    <AppShell title={scannerCopy.screenTitle} showBack backTo={BASE}>
      <div className="px-4 py-4">
        {error ? (
          <div className="rounded-xl bg-danger-bg p-4 text-sm text-danger">
            {error}
            <button
              type="button"
              onClick={() => navigate(BASE)}
              className="mt-4 block w-full rounded-lg bg-white py-2 font-medium text-danger"
            >
              {scannerCopy.back}
            </button>
          </div>
        ) : (
          <>
            <p className="mb-3 text-center text-sm text-ink-muted">
              {scannerCopy.hint}
            </p>
            <div
              id={SCANNER_ID}
              className="overflow-hidden rounded-2xl border-2 border-gold/30 bg-black"
            />
          </>
        )}
      </div>
    </AppShell>
  );
}
