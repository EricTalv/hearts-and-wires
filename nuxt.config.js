export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'heartsandwires',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '' },
      {
        rel: "stylesheet", type: "text/css",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",
        integrity: "sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1",
        crossorigin: "anonymous"
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js',
      integrity: 'sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW',
      crossorigin: 'anonymous'
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js',
      integrity: 'sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU',
      crossorigin: 'anonymous'
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js',
      integrity: 'sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj',
      crossorigin: 'anonymous'
    },

  ],

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxt/content',
  ],

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
