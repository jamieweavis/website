module.exports = {
  head: {
    title: 'Jamie Weavis - Software Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito',
      },
    ],
  },
  loading: { color: '#f5da55' },
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  css: [
    { src: '@/assets/scss/transitions.scss', lang: 'scss' },
    { src: '@/assets/scss/main.scss', lang: 'scss' },
    { src: '@/assets/scss/emoji.scss', lang: 'scss' },
  ],
  modules: ['qonfucius-nuxt-fontawesome'],
  fontAwesome: {
    packs: [
      {
        package: '@fortawesome/fontawesome-free-brands',
        icons: ['faGithub', 'faTwitter', 'faLinkedinIn'],
      },
    ],
  },
};
