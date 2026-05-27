import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { InstallGuard } from "./components/InstallGuard";
import { PhoneFrame } from "./components/PhoneFrame";
import { AdminPage } from "./pages/AdminPage";
import { CpfSearchPage } from "./pages/CpfSearchPage";
import { DashboardPage } from "./pages/DashboardPage";
import { DownloadPage } from "./pages/DownloadPage";
import { EventHubPage } from "./pages/EventHubPage";
import { EventListPage } from "./pages/EventListPage";
import { QrReaderPage } from "./pages/QrReaderPage";
import { SettingsPage } from "./pages/SettingsPage";
import { WalletSoonPage } from "./pages/WalletSoonPage";

export default function App() {
  return (
    <BrowserRouter>
      <PhoneFrame>
        <InstallGuard>
          <Routes>
          <Route path="/" element={<DownloadPage />} />
          <Route path="/app" element={<Navigate to="/app/eventos" replace />} />
          <Route path="/app/eventos" element={<EventListPage />} />
          <Route
            path="/app/eventos/casamento-aline"
            element={<EventHubPage />}
          />
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
      </PhoneFrame>
    </BrowserRouter>
  );
}
