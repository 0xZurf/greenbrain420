import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// VITE_SINGLEFILE=1 inlines everything into one HTML file (used for the hosted preview).
// Normal builds produce a standard dist/ folder for Vercel.
export default defineConfig(() => {
  const single = process.env.VITE_SINGLEFILE === "1";
  return {
    plugins: [react(), tailwindcss(), ...(single ? [viteSingleFile()] : [])],
  };
});
