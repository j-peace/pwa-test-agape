import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["agape-logo.jpg", "hero-inicial.png"],
      manifest: {
        name: "Sem Fila na Porta",
        short_name: "Sem Fila",
        description:
          "Chega de fila na entrada. Saiba na hora quem já chegou ao seu evento.",
        theme_color: "#7a6348",
        background_color: "#faf7f2",
        display: "standalone",
        orientation: "portrait",
        start_url: "/app/dashboard",
        icons: [
          {
            src: "/agape-logo.jpg",
            sizes: "512x512",
            type: "image/jpeg",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,jpg,svg,png,woff2}"],
      },
    }),
  ],
});
