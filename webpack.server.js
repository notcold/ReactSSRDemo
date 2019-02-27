/**
 * Created by shikuan on 2019/2/27.
 */
const path = require('path');
const serverConfig = {
    target: 'node',
    entry: {
        page1: './src/serverRouter.js',
    },
    module: {
        loaders: [{
            test: /\.(jsx|js)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './build'),
        libraryTarget: 'commonjs'
    }
}

module.exports = serverConfig