import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ],
  imports: {
    dirs: ['utils'],
  },
  runtimeConfig: {
    odooUrl: process.env.ODOO_URL,
    odooDb: process.env.ODOO_DB,
    odooUsername: process.env.ODOO_USERNAME,
    odooPassword: process.env.ODOO_PASSWORD,
    public: {
      geoapifyApiKey: process.env.GEOAPIFY_API_KEY,
    }
  },
})