/// <reference types='vitest' />
import * as path from "path";

import { nxCopyAssetsPlugin } from "@nx/vite/plugins/nx-copy-assets.plugin";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  root: __dirname,
  cacheDir: "../../node_modules/.vite/apps/dashboard",

  resolve: {
    alias: {
      "@": "/src",
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/shared/theme.scss";`,
      },
    },
  },

  server: {
    port: 4200,
    host: "127.0.0.1",
  },

  preview: {
    port: 4300,
    host: "127.0.0.1",
  },

  plugins: [
    react(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(["*.md"]),
    dts({
      entryRoot: "src",
      tsconfigPath: path.join(__dirname, "tsconfig.json"),
    }),
    svgr({
      include: "**/*.svg",
    }),
  ],

  build: {
    outDir: "../../dist/apps/dashboard",
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
