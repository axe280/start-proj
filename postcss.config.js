module.exports = {
  plugins: [
    // require('autoprefixer'),
    // require('css-mqpacker'),
    // require('postcss-combine-media-query'),
    require('cssnano')({
      preset: [
        'default', {
          // discardComments: {
          //   removeAll: true,
          // },
          colormin: false,
          normalizeWhitespace: false,
        }
      ]
    })
  ]
}
