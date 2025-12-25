import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
    },
    // This definition ensures 'process.env.API_KEY' works in the browser
    define: {
      'process.env': {
        API_KEY: JSON.stringify(env.API_KEY)
      }
    }
  };
});