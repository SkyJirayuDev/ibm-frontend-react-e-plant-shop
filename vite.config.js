import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ibm-frontend-react-e-plant-shop/",
  plugins: [react()],
});
