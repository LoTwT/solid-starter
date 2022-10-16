import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"
import AutoImport from "unplugin-auto-import/vite"
import Pages from "vite-plugin-pages"
import Unocss from "unocss/vite"

export default defineConfig({
  build: {
    target: "esnext",
  },

  plugins: [
    solidPlugin(),

    AutoImport({
      imports: ["solid-js", "vitest"],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/composables", "src/store"],
    }),

    Pages({
      dirs: "src/pages",
    }),

    Unocss(),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  test: {
    include: ["test/**/*.test.ts"],
    includeSource: ["src/*"],
    environment: "jsdom",
  },
})
