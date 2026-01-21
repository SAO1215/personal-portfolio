import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // set an alias for the source folder, so we can we can import components using @ simbol intead of directly reference the source folder
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
})
