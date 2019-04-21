module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '' : '/',

  devServer: {
    port: 8080
  },

  css: {
    loaderOptions: {
      sass: {
        data: '@import ./src/styles/util/util.sass'
      }
    }
  }
};
