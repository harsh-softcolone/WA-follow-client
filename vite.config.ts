import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  publicDir: "public",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        content: path.resolve(__dirname, "src/content.ts"),
        main: path.resolve(__dirname, "src/main.tsx"),
        background: path.resolve(__dirname, "src/background.ts"),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name].[hash].js",
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const extType = info[info.length - 1];
          if (extType === "css") {
            if (assetInfo.name.includes("index")) {
              return "index.css";
            }
            if (assetInfo.name.includes("content")) {
              return "content.css";
            }
            return "styles/[name][extname]";
          }

          return "assets/[name][extname]";
        },
      },
    },
    outDir: "dist",
    assetsDir: ".",
    emptyOutDir: true,
    sourcemap: "inline",
  },
});
