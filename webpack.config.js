// webpack v4
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { main: './src/js/index.js' },
    output: {
    
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader']
                    }) 
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                        name: '../[path].[ext]',
                        publicPath: '../',
                        emitFile: false
                    }
                  }
                ]
              }
        ]
    },
    plugins: [
        new ExtractTextPlugin(
            { filename: './style/main.css' }
        ),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/public/index.html',
            filename: './public/index.html'
        })
    ]
};

