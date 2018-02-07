let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/assets/js/app.jsx', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .disableNotifications()
    .sourceMaps();

// .webpackConfig({
    //     module: {
    //         rules: [
    //             {
    //                 test: /\.css$/,
    //                 use: ['style-loader', 'css-loader'],
    //                 include: /flexboxgrid/
    //             }
    //         ]
    //     }
    // });



