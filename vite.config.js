import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// TODO: add in a base url?

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
})
