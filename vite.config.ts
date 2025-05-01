
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist', // Standard output directory instead of 'docs'
    emptyOutDir: true, // Clear the output directory before building
    sourcemap: false, // Disable sourcemaps for production
    minify: 'terser', // Use Terser for minification
    cssCodeSplit: true, // Split CSS into chunks
    rollupOptions: {
      output: {
        manualChunks: undefined, // Default chunking strategy
      }
    }
  },
}));
