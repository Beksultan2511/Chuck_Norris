export default defineNuxtConfig({
  devtools: { enabled: false },
  rootDir: '.',
  srcDir: 'src',
  modules: ['@nuxt/image', '@nuxtjs/eslint-module'],
  components: [
    {
      path: '~/shared/components',
      extensions: ['vue'],
    },
    {
      path: '~/widgets',
      extensions: ['vue'],
    },
  ],
  css: ['assets/styles/normalize.css', 'assets/styles/variables.css'],
  image: {
    dir: 'assets',
  },
  app: {
    buildAssetsDir: '/app/',
    head: {
      viewport: 'width=device-width, initial-scale=1',
      title: 'Шутки от Чак-Норриса',
    },
  },
});
