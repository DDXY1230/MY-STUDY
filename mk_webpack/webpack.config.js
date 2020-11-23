const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 这个地方一定要用解构的方式
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const config = {
    mode: 'development',
    entry: './src/index.js',
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },
    output: {
        filename: 'bundle.js',
        // path: path.resolve(__dirname, 'dist1')
        path: path.join(__dirname, './dist3')
    },
    module: {
        rules: [
            { test: /\.(scss|sass|css)$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
            { test: /\.js$/, loader: "babel-loader" }
        ]
    },
    devServer: {
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index-123.html',
            template: 'index.html'
        }),
        new CleanWebpackPlugin(),
        // new CopyWebpackPlugin([{
        //     from: path.join(__dirname, 'assets'),
        //     to: 'assets'
        // }])
        new MiniCssExtractPlugin({
            filename: '[name]1.css',
            chunkFilename: '[id].css'
        })
    ]
}
module.exports = config