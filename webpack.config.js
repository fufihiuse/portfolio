const { execFile } = require('child_process');
const path = require('path');

module.exports = {
    entry: {
        app: './client/portfolio.jsx',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    mode: 'production',
    watchOptions: {
        aggregateTimeout: 200,
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'hosted'),
        filename: '[name]Bundle.js',
    },
};