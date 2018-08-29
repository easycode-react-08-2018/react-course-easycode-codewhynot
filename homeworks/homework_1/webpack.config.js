const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'app.js',
        publicPath: './src'
    },
    mode: 'development',
    devServer: {
        port: 8080,
        hot: true,
        publicPath: '/',
        contentBase: path.resolve(__dirname),
        inline: true
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', query: {compact: false} },
            {
                test: /\.(png|jpe?g|gif|svg|ico)(\?\S*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: './src/assets/images',
                        publicPath: './src/assets/images',
                        name: '[name].[ext]'
                    }
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "app.css",
            chunkFilename: "[id].css",
            options: {
                root: 'src'
            },
            output: {
                path: path.resolve(__dirname),
            }
        })
    ]
}