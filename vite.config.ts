import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src",
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#EC6717",
          "link-color": "#EC6717",
          "border-radius-base": "2px",
          "btn-primary-bg": "#EC6717",
        },
        javascriptEnabled: true,
      },
    },
  },
  server: { port: 3000 },
});
