const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/app.ts',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'ts-loader'
            },
            {
                test: /\.png$/,
                include: [
                    path.resolve(__dirname, 'asset')
                ],
                loader: 'file-loader?name=[name].[ext]&publicPath=asset' +
                    '&outputPath=asset'
            }
        ]
    },
    devtool: '#source-map',
    devServer: {
        /**
         * @link: https://webpack.js.org/configuration/stats
         */
        stats: {
            colors: true
            , chunks: false
            , hash: false
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Card Battle'
        })
    ]
}