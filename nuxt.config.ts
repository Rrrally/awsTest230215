// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        "./runtimeConfig": "./runtimeConfig.browser",
      },
      vite: {
        define: {
          "window.global": {},
        },
      },
 
      css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],
      build: {
        transpile: ["vuetify", '@vuepic/vue-datepicker'],
      },
      modules: [
        '@vueuse/nuxt',
        '@pinia/nuxt',
        
      ],
})
