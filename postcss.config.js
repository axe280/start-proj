module.exports = {
  plugins: [
    require('cssnano')({
      preset: [
        'default',
        {
          // discardComments: {
          //   removeAll: true,
          // },
          colormin: false,
          normalizeWhitespace: false,
        },
      ],
    }),
  ],
}
