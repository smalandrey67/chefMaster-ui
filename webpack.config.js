const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	mode: "production",
	entry: "./src/index.ts",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		libraryTarget: "commonjs2",
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				exclude: [/node_modules/]
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			}
		]
	},
	optimization: {
		minimizer: [new CssMinimizerPlugin()]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "styles/[name].css"
		})
	],
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	}
};
