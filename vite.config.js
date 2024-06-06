import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  base: "iphone_15_landing_page",
  build: {
    sourcemap: true,
  },
});
