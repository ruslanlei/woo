module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/scss/index.scss";',
      },
    },
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false,
    },
  },

  transpileDependencies: [
    'quasar',
  ],
};
