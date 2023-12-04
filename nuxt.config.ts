// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-windicss',
    '@vueuse/nuxt'
  ],
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY || '',
    apiBaseUrl: process.env.NUXT_API_BASE_URL || '',
    public: {
      imgBaseUrl: process.env.NUXT_PUBLIC_IMG_BASE_URL || ''
    }
  },
})
