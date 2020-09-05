const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpack = require("html-webpack-plugin");

module.exports = {
    entry: "./src/client/index.js",
    output: {
        filename: "[contentHash].js"
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        }, {
            test: /\.css$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            localIdentName: "[local]-[hash:base64:6]"
                        }
                    }
                }
            ]
        }, {
            test: /\.(png|svg|jpe?g|gif)$/,
            use: [{
                loader: "file-loader",
                options: {
                    outputPath: "assets",
                    name: "[hash].[ext]"
                }
            }]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpack({
            template: "./src/client/index.html",
            filename: "./index.html",
            base: "/"
        })
    ],
    devServer: {
        port: process.env.PORT || 3000,
        historyApiFallback: true
    }
}