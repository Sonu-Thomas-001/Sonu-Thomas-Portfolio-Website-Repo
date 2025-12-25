import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // process.env will contain system variables (like in Vercel)
  // loadEnv loads variables from .env files
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
    },
    // This definition ensures 'process.env.API_KEY' works in the browser
    // It prioritizes the system environment variable (Vercel) over the .env file
    define: {
      'process.env': {
        API_KEY: JSON.stringify(process.env.API_KEY || env.API_KEY)
      }
    }
  };
});