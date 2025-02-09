import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignore specific warnings
        if (warning.code === 'UNUSED_EXTERNAL') {
          return; // Ignore unused external warnings
        }
        // Log other warnings
        warn(warning);
      },
    },
    // Use `esbuild` to potentially catch and ignore errors
    esbuild: {
      // Suppress certain types of errors here if needed
      // For example, allow warnings for TypeScript/JavaScript type errors
      jsxInject: 'import React from "react";', // Example, remove if not using
      loader: 'jsx', // Set appropriate loader if needed
    },
  },
})
