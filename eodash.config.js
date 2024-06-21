import { defineConfig } from "@eodash/eodash/config";
export default defineConfig({
  base: "",
  dev: {
    port: 3000,
    host: false,
    open: false,
  },
  preview: {
    host: true,
    open: true,
  },
  cacheDir: ".eodash/temp",
});
