const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const modeConfig = env => require(`./webpack/webpack.${env}`)(env);

module.exports = ({mode, presets} = {mode: 'production', presets: []}) => ({
  entry: './src/index.ts',
  mode,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        exclude: [path.resolve(__dirname, 'node_modules/excalibur')],
        enforce: 'pre'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|bmp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              emitFile: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      title: 'Base Builder'
    })
  ],
  ...modeConfig(mode)
});
