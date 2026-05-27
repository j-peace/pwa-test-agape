import { useState } from "react";
import { AppShell } from "../components/AppShell";
import { ResultScreen } from "../components/ResultScreen";
import { cpf } from "../lib/copy";
import {
  VALID_CPFS,
  getState,
  normalizeCpf,
  setState,
} from "../lib/storage";

const BASE = "/app/eventos/casamento-aline";

export function CpfSearchPage() {
  const [value, setValue] = useState("");
  const [resultState, setResultState] = useState<
    "success" | "already" | "notfound" | null
  >(null);
  const [guestName, setGuestName] = useState("");

  const formatCpf = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 11);
    if (d.length <= 3) return d;
    if (d.length <= 6) return `${d.slice(0, 3)}.${d.slice(3)}`;
    if (d.length <= 9)
      return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`;
    return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
  };

  const handleSearch = () => {
    const key = normalizeCpf(value);
    const name = VALID_CPFS[key];

    if (!name) {
      setResultState("notfound");
      return;
    }

    const state = getState();
    if (key === "98765432100" && state.alineCheckedIn) {
      setResultState("already");
      return;
    }

    if (key === "98765432100") {
      setState({
        alineCheckedIn: true,
        entryCount: state.entryCount + 1,
      });
    } else {
      setState({ entryCount: state.entryCount + 1 });
    }

    setGuestName(name);
    setResultState("success");
  };

  if (resultState === "success") {
    return (
      <ResultScreen
        type="success"
        guestName={guestName === "Aline" ? "Aline" : guestName.split(" ")[0]}
        backTo={BASE}
      />
    );
  }
  if (resultState === "already") {
    return <ResultScreen type="already" backTo={BASE} />;
  }
  if (resultState === "notfound") {
    return <ResultScreen type="notfound" backTo={BASE} />;
  }

  return (
    <AppShell title={cpf.screenTitle} showBack backTo={BASE}>
      <div className="px-4 py-6">
        <label className="block text-sm text-gold-deep">{cpf.label}</label>
        <input
          type="text"
          inputMode="numeric"
          placeholder={cpf.placeholder}
          value={value}
          onChange={(e) => setValue(formatCpf(e.target.value))}
          className="mt-2 w-full rounded-xl border-2 border-gold/35 bg-white px-4 py-4 text-lg outline-none focus:border-gold font-serif"
        />
        <button
          type="button"
          onClick={handleSearch}
          disabled={normalizeCpf(value).length < 11}
          className="btn-gold mt-6 w-full rounded-xl py-4 text-lg disabled:opacity-40"
        >
          {cpf.submit}
        </button>
        <p className="mt-4 text-center text-xs text-ink-muted/70">
          {cpf.demoHint}
        </p>
      </div>
    </AppShell>
  );
}
