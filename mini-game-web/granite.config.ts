import { defineConfig } from "@apps-in-toss/web-framework/config";

export default defineConfig({
  appName: "tteokbokki-feast",
  brand: {
    displayName: "풍성떡볶이",
    primaryColor: "#8d192b",
    icon: "./public/images/600.png",
    bridgeColorMode: "inverted",
  },
  web: {
    host: "localhost",
    port: 5173,
    commands: {
      dev: "vite --host",
      build: "vite build",
    },
  },
  permissions: [],
  webViewProps: {
    type: "game",
  },
  outdir: "dist",
});
