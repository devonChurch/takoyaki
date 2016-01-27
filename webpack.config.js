var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + '/src',
    devtool: 'source-map',
    entry: './entry.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin([
            { from:  './fonts', to: './fonts' },
            // { from:  '../img', to: 'img' }
        ]),
        new ExtractTextPlugin('style.css')
    ],
    module: {
        loaders: [
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!autoprefixer?browsers=last 2 versions!sass') },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel!eslint'}, // Automatically generates source maps without the sourceMaps config
            { test: /\.(woff|woff2)$/, loader: 'url?limit=100000&name=[name].[ext]'}
        ]
    },
    eslint: {
        failOnWarning: false,
        failOnError: false
    },
    resolve: {
        extensions: ['', '.js', '.jade', '.woff', '.woff2']
    }
};
