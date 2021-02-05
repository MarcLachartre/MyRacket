process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()

// const path = require('path');

// module.exports = {
//   mode: 'development',
//   entry: {
//     index: './app/javascript/packs/search_function.js',
//    another: './app/javascript/components/search_function/searchbar.js',
//   },
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
// };
