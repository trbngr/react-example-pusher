var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var source = path.join(__dirname, 'src');

module.exports = {
    cache: true,
    debug: true,
    devtool: 'inline-source-map',
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
            'webpack/hot/only-dev-server',
            path.resolve(source, 'index.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        chunkFilename: '[id].js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel?stage=0&optional[]=runtime',
                include: source
            }

        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            __LOG_LEVEL__: JSON.stringify('TRACE'),
            __DEV__: JSON.stringify(true)
        }),
        new HtmlWebpackPlugin({
            title: 'Pusher Example',
            template: path.resolve(source, 'index.html')
        })
    ],
    devServer: {
        colors: true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    }
};
