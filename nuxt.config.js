export default {
  target: 'static',

  router: {
    base: '/tarunpatel1860.github.io/'
  },

  // Global page headers
  head: {
    title: 'Tarun Patel',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap',
        async: true,
      },
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-LT03TLYBCG',
        async: true,
      },
    ],
  },

  // Global CSS
  css: ['@/assets/styles/main.scss', '@/assets/icons/style.css'],

  // Plugins
  plugins: [
    { src: '~/plugins/vue-touch', ssr: false },
    { src: '~/plugins/google-analytics', ssr: false },
  ],

  // Auto import components
  components: true,

  // Build Modules
  buildModules: [
    '@nuxtjs/eslint-module',
  ],

  // Modules
  modules: [],

  // Build Configuration
  build: {},
}
