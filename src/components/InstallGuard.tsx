import { Navigate, useLocation } from "react-router-dom";
import { isStandalonePwa } from "../lib/device";

const DEMO_BYPASS_KEY = "agape_demo_bypass";

export function setDemoBypass(): void {
  sessionStorage.setItem(DEMO_BYPASS_KEY, "1");
}

export function hasDemoBypass(): boolean {
  return sessionStorage.getItem(DEMO_BYPASS_KEY) === "1";
}

export function InstallGuard({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const installed = isStandalonePwa();
  const bypass = hasDemoBypass();

  const publicPaths = ["/", "/wallet/em-breve"];
  const isPublic = publicPaths.some((p) => location.pathname.startsWith(p));

  if (
    location.pathname.startsWith("/app") &&
    !installed &&
    !bypass &&
    !isPublic
  ) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
