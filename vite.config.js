import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
    server: {
    host: true,           // 👈 exposes to local IP (same as --host)
    port: 5173,           // 👈 optional: set any open port
    strictPort: true,     // 👈 prevents auto-changing port
  },
})
