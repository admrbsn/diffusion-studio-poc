/// <reference types="vite/client" />

import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    target: 'esnext', // enables top-level await support
  },
})