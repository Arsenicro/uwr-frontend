import tailwindcss from "@tailwindcss/vite";
import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss()],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
