
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "tailwindcss";

// // https://vitejs.dev/config/
// export default defineConfig({
//   css: {
//     postcss: {
//       plugins: [react(),tailwindcss()],
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()], // Vite plugins go here
  css: {
    postcss: {
      plugins: [tailwindcss()], // PostCSS plugins go here
    },
  },
});
