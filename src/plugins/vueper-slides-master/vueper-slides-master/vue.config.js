module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vueper-slides' : '',
  outputDir: 'docs',
  lintOnSave: true,
  devServer: {
    overlay: {
      errors: false,
      warnings: false
    }
  },
  chainWebpack: config => {
    // Preserve whitespaces for ssh-pre component.
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.whitespace = 'preserve'
        return options
      })
  },
  transpileDependencies: ['vuetify']
}
