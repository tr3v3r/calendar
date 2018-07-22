const {resolve} = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";
console.log(isProd);

const config = {
	entry: ['./public/index.js'],

	output: {
		filename: 'build.js',
		path: resolve(__dirname,'dist'),
		publicPath: '/dist'

	},

	 module: {
  	 	rules: [
  	 		{
  	 			test: /\.jsx?$/,
  	 			exclude: /(node_modules|bower_components)/,
  	 			use: {
  	 				loader: 'babel-loader',
  	 				options: {
  	 					presets: [ ['env',{"modules": false}], 'react' ],
  	 					plugins: ["react-hot-loader/babel",'transform-runtime',"styled-jsx/babel"]
  	 				}
  	 			}
  	 		},
  	 		{
          		test: /\.css$/,
         		  use: ['style-loader','css-loader']
        		},

        		{
          		test: /\.js$/,
          		exclude: /node_modules/,
  				enforce:'pre',
          		loader: "eslint-loader",
  			},
  	 	]
	 },

	plugins: [
		new webpack.DefinePlugin({
			'isProd': JSON.stringify(isProd)
		})
  ],

};


if (!isProd) {
	config.entry.unshift('react-hot-loader/patch',
						 'webpack-dev-server/client?http://localhost:8080',
						 'webpack/hot/only-dev-server');

	config.devServer = {
						hot: true,
						contentBase: resolve(__dirname, './'),
						publicPath: '/dist',
						stats: "errors-only",
                        historyApiFallback: true
				 	    };
	config.devtool = 'inline-source-map';
	config.plugins.push(new webpack.HotModuleReplacementPlugin(),
						new webpack.NamedModulesPlugin());

} else {
    console.log("asdad")
    config.plugins.push(new ExtractTextPlugin("styles.css"));
    config.module.rules[1].use = ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"});
}

module.exports = config;
