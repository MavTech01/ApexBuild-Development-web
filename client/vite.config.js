import { resolve } from 'path'
import os from 'node:os'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Some sandboxes (e.g. PRoot on Android) deny the getifaddrs syscall, so
// os.networkInterfaces() throws and crashes Vite when it binds to the LAN
// (`--host`). Fall back to an empty map so the dev server still starts — only
// the printed Network URL is lost, the server is still reachable.
const networkInterfaces = os.networkInterfaces
os.networkInterfaces = () => {
  try {
    return networkInterfaces.call(os)
  } catch {
    return {}
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
    },
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})

