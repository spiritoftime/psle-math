import tsconfigPaths from "vite-tsconfig-paths";
import { loadEnvConfig } from "@next/env";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

loadEnvConfig(process.cwd());

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
  },
});
