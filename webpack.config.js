"use strict";

let webpack = require("webpack");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
	context: __dirname,
	entry: {
		"index":[
			"./src/main.ts"
        ],
        "common":[
            './src/common.ts'
        ]
	},
	output: {
		path: `${__dirname}/built`,
		publicPath: "/",
		filename: "./js/[name].js"
	},
	devtool: "source-map",
    module:{
        rules:[
            {
              test: /\.less$/, 
              use:[MiniCssExtractPlugin.loader,"css-loader","less-loader"]
            },
            // {
            //     test:/\.js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use:{
            //         loader:'babel-loader'
            //     }
            // },
            {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ts-loader'
            },
            {
                test:require.resolve("ip"),
                use:[{
                    loader: "expose-loader",
                    options:"_IP"
                }] 
            },
            {
                test:/\.gif|png|jpg|jpeg|svg|woff|ttf|woff2?|eot/,
                use:[{
                    loader:"file-loader",
                    options:{
                        name:"img/[name].[ext]"
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.ts'
        ]
    },
	plugins: [
		new MiniCssExtractPlugin({filename:"./css/[name].css"})
	],
	devServer: {
		port: 36666,
        disableHostCheck: true,
        compress: false,
		contentBase: `${__dirname}/src`
	}
};