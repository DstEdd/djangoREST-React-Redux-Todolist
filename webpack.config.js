var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './tododjango/frend/src/index.js',
    output : {
        path : path.resolve(__dirname , 'tododjango/frend/dist'),
        publicPath: "/dist/",
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'tododjango/frend/src'),
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'tododjango/frend/src'),
                loader: 'style-loader!css-loader'
            }
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'tododjango/frend/src/index.html'
        })
    ]

}
