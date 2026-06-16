import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/supabase-api': {
        target: 'https://ykxjvohzuddwwzfetwvc.supabase.co',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/supabase-api/, '')
      }
    }
  }
})
