import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Deployed at https://USERNAME.github.io/opsway_bot/
  base: '/opsway_bot/',
})
