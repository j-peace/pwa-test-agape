import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { InstallGuard } from "./components/InstallGuard";
import { PhoneFrame } from "./components/PhoneFrame";
import { AdminPage } from "./pages/AdminPage";
import { CpfSearchPage } from "./pages/CpfSearchPage";
import { DashboardPage } from "./pages/DashboardPage";
import { DownloadPage } from "./pages/DownloadPage";
import { EventHubPage } from "./pages/EventHubPage";
import { EventListPage } from "./pages/EventListPage";
import { OrcamentoPage } from "./pages/OrcamentoPage";
import { QrReaderPage } from "./pages/QrReaderPage";
import { SettingsPage } from "./pages/SettingsPage";
import { WalletSoonPage } from "./pages/WalletSoonPage";

function AppRoutes() {
  return (
    <InstallGuard>
      <Routes>
        <Route path="/" element={<DownloadPage />} />
        <Route path="/app" element={<Navigate to="/app/eventos" replace />} />
        <Route path="/app/eventos" element={<EventListPage />} />
        <Route path="/app/eventos/casamento-aline" element={<EventHubPage />} />
        <Route
          path="/app/eventos/casamento-aline/ler"
          element={<QrReaderPage />}
        />
        <Route
          path="/app/eventos/casamento-aline/buscar"
          element={<CpfSearchPage />}
        />
        <Route path="/app/dashboard" element={<DashboardPage />} />
        <Route
          path="/app/eventos/casamento-aline/dashboard"
          element={<Navigate to="/app/dashboard" replace />}
        />
        <Route path="/app/configuracoes" element={<SettingsPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/wallet/em-breve" element={<WalletSoonPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </InstallGuard>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/orcamento" element={<OrcamentoPage />} />
        <Route
          path="*"
          element={
            <PhoneFrame>
              <AppRoutes />
            </PhoneFrame>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
