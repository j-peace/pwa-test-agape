import { Navigate, useLocation } from "react-router-dom";
import { isMobile, isStandalonePwa } from "../lib/device";

const APP_ENTRY = "/app/eventos";

export function InstallGuard({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const installed = isStandalonePwa();
  const path = location.pathname;

  if (installed) {
    if (path === "/") {
      return <Navigate to={APP_ENTRY} replace />;
    }
    return <>{children}</>;
  }

  if (path.startsWith("/app")) {
    return <Navigate to="/" replace />;
  }

  if (path.startsWith("/admin") && isMobile()) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
