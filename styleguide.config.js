const path = require('path')
const {
  VueLoaderPlugin
} = require('vue-loader')

module.exports = {
  require: [path.join(__dirname, 'styleguide/global.requires.js')],
  components: './components/**/**.vue',
  webpackConfig: {
    module: {
      rules: [{
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: require('./babel.config')
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'vue-style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: {
                  path: './'
                }
              }
            }
          ],
          include: path.resolve(__dirname, '../')
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [{
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true
            },
          }],
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  },
  usageMode: 'expand',
  styleguideDir: 'dist'
}
