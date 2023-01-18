const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'docs'), // './dist'의 절대 경로를 리턴합니다.
        filename: 'main.js',
    },
    module: {
        rules: [
        {
                    // 파일명이 .css로 끝나는 모든 파일에 적용
            test: /\.css$/,
                    // 배열 마지막 요소부터 오른쪽에서 왼쪽 순으로 적용
                    // 먼저 css-loader가 적용되고, styled-loader가 적용되어야 한다.
                    // 순서 주의!
            use: ["style-loader", "css-loader"],
            exclude: /node_modules/,
        }]},
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname,'index.html'),
        
    }),new CleanWebpackPlugin(),],
};