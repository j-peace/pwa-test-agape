import { useLocation, useNavigate } from "react-router-dom";
import { bottomNav } from "../lib/copy";

type TabId = "scan" | "dashboard" | "gerenciar" | "profile";

function NavIcon({
  children,
  active,
}: {
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <span
      className={`flex h-6 w-6 items-center justify-center ${active ? "text-gold" : "text-gray-400"}`}
    >
      {children}
    </span>
  );
}

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const activeTab = (): TabId => {
    if (path.startsWith("/app/dashboard")) return "dashboard";
    if (path.startsWith("/app/configuracoes")) return "profile";
    if (
      path.endsWith("/ler") ||
      path.endsWith("/buscar") ||
      path === "/app/eventos/casamento-aline"
    ) {
      return "scan";
    }
    if (path.startsWith("/app/eventos")) return "scan";
    return "scan";
  };

  const active = activeTab();

  const handleGerenciar = () => {
    alert(bottomNav.manageAlert);
  };

  const items: {
    id: TabId;
    label: string;
    onClick: () => void;
  }[] = [
    {
      id: "scan",
      label: bottomNav.scanQr,
      onClick: () => navigate(bottomNav.scanRoute),
    },
    {
      id: "dashboard",
      label: bottomNav.live,
      onClick: () => navigate("/app/dashboard"),
    },
    {
      id: "gerenciar",
      label: bottomNav.manage,
      onClick: handleGerenciar,
    },
    {
      id: "profile",
      label: bottomNav.profile,
      onClick: () => navigate("/app/configuracoes"),
    },
  ];

  return (
    <nav className="shrink-0 border-t border-gold/20 bg-cream/98 backdrop-blur-md safe-bottom">
      <div className="grid h-16 grid-cols-4">
        {items.map((item) => {
          const isActive = item.id === active;
          return (
            <button
              key={item.id}
              type="button"
              onClick={item.onClick}
              className={`flex flex-col items-center justify-center gap-0.5 px-0.5 active:bg-gold/10 ${
                isActive ? "text-gold-deep" : "text-ink-muted"
              }`}
            >
              {item.id === "scan" && (
                <NavIcon active={isActive}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </NavIcon>
              )}
              {item.id === "dashboard" && (
                <NavIcon active={isActive}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </NavIcon>
              )}
              {item.id === "gerenciar" && (
                <NavIcon active={false}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </NavIcon>
              )}
              {item.id === "profile" && (
                <NavIcon active={isActive}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </NavIcon>
              )}
              <span
                className={`max-w-full truncate font-serif text-[9px] leading-tight sm:text-[10px] ${
                  isActive ? "text-gold-deep" : ""
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export function shouldShowBottomNav(pathname: string): boolean {
  if (pathname === "/") return false;
  if (pathname.endsWith("/ler")) return false;
  if (pathname.startsWith("/wallet")) return false;
  if (!pathname.startsWith("/app")) return false;
  return true;
}
