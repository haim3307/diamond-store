const pkg = require('./package');
const webpack = require('webpack');

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
        { src: "/js/vendor/jquery-3.3.1.js", ssr: false },
        { src: "/js/vendor/jquery-migrate-1.4.1.min.js", ssr: false },
        { src: "/js/vendor/popper.min.js", ssr: false },
        { src: "/js/vendor/bootstrap.min.js", ssr: false },
        { src: "/js/plugins.min.js", ssr: false },
        { src: "/js/active.js", ssr: false },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
      { src: '~/assets/scss/base.scss',lang:'sass' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      { src: "~/plugins/global.js" },
      { src: "~/plugins/injectDataFromServer.js" }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
     '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
      ['@nuxtjs/proxy', { "secure": false,      changeOrigin: true }],
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
      proxy: true
  },
    proxy: {
      '/api/': { target: 'https://www.purecarat.com', pathRewrite: {'^/api/': ''} ,"secure": false,changeOrigin: true}
    },
  /*
  ** Build configuration
  */
  build: {
/*    vendor: ['jquery'],
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            'window.jQuery': 'jquery',
        }),
    ]*/
    /*
    ** You can extend webpack config here
    */
/*    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }*/
  }
};
