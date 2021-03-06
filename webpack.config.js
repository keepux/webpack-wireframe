const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    entry: {
        app: './app.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist', 'assets'),
        publicPath: '/assets',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['env'] },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { modules: true },
                    },
                ],
            },
            {
                test: /\.(sass|scss)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};
