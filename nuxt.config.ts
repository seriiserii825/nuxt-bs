// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  runtimeConfig: {
    public: {
      site_title: "Burduja Sergiu",
      apiBase: "http://localhost:8080/api",
      server_url: "http://localhost:8080",
      local_url: "http://localhost:3000",
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
