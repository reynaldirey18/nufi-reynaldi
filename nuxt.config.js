// import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  target: 'static',
  ssr: false,
  head: {
    titleTemplate: '%s - Wedding Invitation',
    title: 'Nufi & Reynaldi',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylessheet',
        href:
          'https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/vee-validate.js', '~/plugins/vue-mdi-svg-icons.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://typescript.nuxtjs.org/
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth',
    // https://purgecss.com/guides/nuxt.html
    // 'nuxt-purgecss',
    // https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader',
    'nuxt-material-design-icons',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
  moment: {
    // option
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {},
    defaultAssets: {
      font: {
        family: 'Montserrat',
      },
      icons: false,
    },
    treeShake: true,
    optionsPath: './vuetify.options.js',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vee-validate/dist/rules'],
    extractCSS: true,
    extend(config) {
      config.resolve.alias['chart.js'] = 'chart.js/dist/Chart.js';
      config.externals = config.externals || {};
      config.externals.moment = 'moment';
    },
  },

  // https://auth.nuxtjs.org/
  auth: {},

  // https://github.com/Developmint/nuxt-webfontloader
  webfontloader: {
    google: {
      families: [],
    },
  },

  purgeCSS: {
    //   paths: ['node_modules/vuetify/src/**/*.ts'],
    //   whitelist: ['v-application', 'v-application--wrap', 'row', 'col'],
    //   whitelistPatterns: [
    //     /^v-((?!application).)*$/,
    //     /^theme--*/,
    //     /.*-transition/,
    //     /col-*/,
    //     /align-*/,
    //   ],
    //   whitelistPatternsChildren: [
    //     /^v-((?!application).)*$/,
    //     /^theme--*/,
    //     /col-*/,
    //     /align-*/,
    //   ],
  },
};
