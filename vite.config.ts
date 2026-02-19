export default defineConfig(({ mode }) => ({
  base: "/MyProfile/",   // ✅ ADD THIS

  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },

  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
