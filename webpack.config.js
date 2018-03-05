const path = require('path');
const webpack = require('webpack');

module.exports = {
    // __dirname = location of this config file
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }
};
