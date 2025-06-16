import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'https://github.com/Aadipatle/redux_dep.git',
  plugins: [react()],
})
