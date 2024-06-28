import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: "./.vite",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
