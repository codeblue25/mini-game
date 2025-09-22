import { defineConfig } from "@apps-in-toss/web-framework/config";

export default defineConfig({
  appName: "tteokbokki-feast",
  brand: {
    displayName: "풍성떡볶이", // 화면에 노출될 앱의 한글 이름으로 바꿔주세요.
    primaryColor: "#8d192b", // 화면에 노출될 앱의 기본 색상으로 바꿔주세요.
    icon: "./pulbic/images/600.png", // 화면에 노출될 앱의 아이콘 이미지 주소로 바꿔주세요.
    bridgeColorMode: "basic",
  },
  web: {
    host: "localhost",
    port: 5173,
    commands: {
      dev: "vite",
      build: "vite build",
    },
  },
  permissions: [],
  webViewProps: {
    type: "partner",
  },
  outdir: "dist",
});
