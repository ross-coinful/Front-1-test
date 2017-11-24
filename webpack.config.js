const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/index.js', // 要輸出的檔案入口
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js' //最終的目的檔案
  },
  module: {
  	rules: [
  		{
  			test: /\.js$/,
  			exclude: /node_modules/,
  			use: [
  				{
  					loader: 'babel-loader',
  					query: {
  						presets: ['es2015', 'stage-0', 'react'],
  					}
  				}
  			],
  		}
  	]
  },
  plugins: [new HtmlWebpackPlugin()]
}
