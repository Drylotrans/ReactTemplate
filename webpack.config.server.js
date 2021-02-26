const nodeExternals = require('webpack-node-externals');
const WebpackBar = require('webpackbar');

module.exports = {
    stats: 'errors-only',
    entry: './src/server.js',
    output: {
        filename: 'server.js',
        path: require('path').join(__dirname, 'dist/')
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    plugins: [
        new WebpackBar({
            name: 'Express Server'
        })
    ]
};