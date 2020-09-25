const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackManifestPlugin({
      name: 'Pettagram - Tu app social de mascotas',
      short_name: 'Pettagram 🐶',
      description: 'Con Petgram puedes encontrar y subir fotos de animales domésticos.',
      background_color: '#ffffff',
      theme_color: '#b1a',
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            '@babel/plugin-transform-runtime'
          ]
        }
      }
    ]
  }
}
