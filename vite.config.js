
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'process'
// https://vitejs.dev/config/
// Different chemins si on est en local ou en prod ex: github pages
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/kasa/" : "/",
  plugins: [react()],
})
