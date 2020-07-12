const path = require('path');
const HWP = require('html-webpack-plugin');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = () => {

    const config = {
        entry: path.join(__dirname, '/src/entryPoint/index.js'),
        output: {
            filename: 'build.js',
            path: path.join(__dirname, './dist')
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.less$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader
                            : 'style-loader',
                        'css-loader', 'less-loader'],
                },
                {
                    test: /\.(jpg|png|svg)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 25000,
                    },
                },
                // {`
                //     test: /\.(jpg|png|svg)$/,
                //     loader: 'file-loader',
                //     options: {
                //         name: '[path][name].[hash].[ext]',
                //     },
                // },`
            ]
        },
        devServer: {
            historyApiFallback: true,
            contentBase: './',
            hot: true
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HWP(
                {
                    template: path.join(__dirname, '/src/entryPoint/index.html')
                }
            ),
            new CompressionPlugin({
                filename: "[path].gz[query]",
                algorithm: "gzip",
                test: /\.js$|\.css$|\.html$/,
                threshold: 10240,
                minRatio: 0.8
            })

        ]
    }

    if (isProduction)
        config.plugins.push(
            new MiniCssExtractPlugin(),
            new UglifyJSPlugin()
        )

    return (config);
}