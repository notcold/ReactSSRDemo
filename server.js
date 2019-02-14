/**
 * Created by shikuan on 2017/11/13.
 */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));
// configuration file as a base.
app.use(express.static(__dirname));


app.get("/", function (req, res) {
    res.sendFile('index.html')
});
// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});