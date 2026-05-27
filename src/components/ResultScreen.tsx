import { Link } from "react-router-dom";
import { result } from "../lib/copy";

type ResultType = "success" | "already" | "notfound";

const config: Record<
  ResultType,
  { bg: string; title: string; subtitle: string }
> = {
  success: {
    bg: "bg-success",
    title: "Liberado",
    subtitle: "",
  },
  already: {
    bg: "bg-warn",
    title: result.alreadyTitle,
    subtitle: result.alreadySubtitle,
  },
  notfound: {
    bg: "bg-danger",
    title: result.notFoundTitle,
    subtitle: result.notFoundSubtitle,
  },
};

interface ResultScreenProps {
  type: ResultType;
  guestName?: string;
  backTo: string;
}

export function ResultScreen({ type, guestName, backTo }: ResultScreenProps) {
  const c = config[type];
  const message =
    type === "success" && guestName
      ? guestName === "Aline"
        ? result.successAline
        : result.successGuest(guestName)
      : type === "success"
        ? result.successGeneric
        : c.title;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center ${c.bg} px-6 text-white`}
    >
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/20">
        {type === "success" ? (
          <svg className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div>
      <h2 className="text-center text-3xl">{message}</h2>
      {c.subtitle && (
        <p className="mt-3 text-center text-lg text-white/90">{c.subtitle}</p>
      )}
      <Link
        to={backTo}
        className="mt-12 rounded-full bg-white px-8 py-4 text-lg text-gold-deep shadow-lg active:scale-95 font-serif"
      >
        {result.continue}
      </Link>
    </div>
  );
}
