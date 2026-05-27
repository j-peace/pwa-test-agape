import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { BottomNav, shouldShowBottomNav } from "./BottomNav";

interface AppShellProps {
  children: ReactNode;
  title?: string;
  showBack?: boolean;
  backTo?: string;
  rightAction?: ReactNode;
}

export function AppShell({
  children,
  title,
  showBack,
  backTo = "/app/eventos",
  rightAction,
}: AppShellProps) {
  const location = useLocation();
  const hideHeader = location.pathname === "/";
  const showNav = shouldShowBottomNav(location.pathname);

  if (hideHeader) {
    return <div className="app-shell safe-top safe-bottom">{children}</div>;
  }

  return (
    <div className="app-shell safe-top safe-bottom">
      <header className="sticky top-0 z-50 border-b border-gold/25 bg-cream/98 backdrop-blur-sm">
        <div className="flex h-14 items-center gap-3 px-4">
          {showBack ? (
            <Link
              to={backTo}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-gold-dark active:bg-gold/10"
              aria-label="Voltar"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Link>
          ) : (
            <div className="w-10" />
          )}
          <div className="flex min-w-0 flex-1 items-center justify-center gap-2">
            <img
              src="/agape-logo.jpg"
              alt="Ágape"
              className="h-8 w-8 rounded-full object-cover"
            />
            {title && (
              <h1 className="truncate text-base text-gold-deep">
                {title}
              </h1>
            )}
          </div>
          <div className="flex w-10 justify-end">{rightAction}</div>
        </div>
      </header>
      <main className={`flex-1 overflow-y-auto ${showNav ? "pb-2" : ""}`}>
        {children}
      </main>
      {showNav && <BottomNav />}
    </div>
  );
}
