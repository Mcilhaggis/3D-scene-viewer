const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        // filename: 'main.js',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    //   In order to import a CSS file from within a JavaScript module, you need to install and add the style-loader and css-loader to your module configuration

    devServer: {
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            // Will send images stored in the src folder to the dist folder on build
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource',
            // },
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: path.join(__dirname, '/src/index.html')
    //     })
    // ]
};