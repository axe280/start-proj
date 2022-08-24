const mix = require("laravel-mix");
require("laravel-mix-merge-manifest");

mix.setPublicPath("public").mergeManifest();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.browserSync("localhost:8000");

mix.js("resources/client/js/app.js", "public/client/js")
  .vue()
  .sass("resources/client/sass/app.sass", "public/client/css", [
    //
  ])
  .version();

if (!mix.inProduction()) {
  mix.webpackConfig({
    devtool: "inline-source-map",
  });
}
