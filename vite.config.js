import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/undangan-pernikahan/', // Tambahkan baris ini (sesuai nama repositori di GitHub)
  plugins: [
    react(),
    tailwindcss(),
  ],
})