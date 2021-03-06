var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var compiler = webpack(config);

var options = {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
};
var server = new WebpackDevServer(compiler, options);

server.listen(8080, 'localhost',
    function (err, result) {
        if (err) {
            console.log(err);
        }

        console.log('Listening at localhost:8080');
    });
