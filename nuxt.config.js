require('dotenv').config()

export default {
  mode: 'universal',
  head: {
    title: 'QuickieCoin',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  loading: {
    color: '#fff'
  },
  css: [],
  plugins: [
    { src: '~/plugins/mapbox', mode: 'client' },
    { src: '~/plugins/ga', mode: 'client' },
    { src: '~/plugins/hotjar', mode: 'client' }
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    ['nuxt-sanity', {
      projectId: 'dkkl7znc',
      dataset: 'production'
    }],
    ['nuxt-fontawesome', {
      imports: [{
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }]
    }]
  ],
  axios: {},
  markdownit: {
    injected: true
  },
  build: {
    extend (config, ctx) {}
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
}
