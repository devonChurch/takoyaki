// var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + '/src/js',
    devtool: 'source-map',
    entry: './entry.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        // new CopyWebpackPlugin([
        //     { from:  '../index.html', to: 'index.html' },
        //     { from:  '../img', to: 'img' }
        // ]),
        new ExtractTextPlugin('style.css')
        // new ExtractTextPlugin('one.html')
    ],
    module: {
        loaders: [
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!autoprefixer?browsers=last 2 versions!sass') },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel!eslint'} // Automatically generates source maps without the sourceMaps config
            // { test: /\index.jade$/, loader: 'file?name=index.html!jade-html'}
            // { test: /\.jade$/, loader: ['index', 'file?name=index.html!jade-html']}
            // { test: /\.jade$/, loader: ExtractTextPlugin.extract('jade') },
            // { test: /\.jade$/, loader: 'jade-html'},
        ]
    },
    eslint: {
        failOnWarning: false,
        failOnError: false
    }
};

// const posts = [
//     'one',
//     'two',
//     'three'
// ];
//
// for (post of posts) module.exports.plugins.push(new ExtractTextPlugin(`${post}.html`));
