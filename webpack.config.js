const path = require(`path`);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HelloWorldPlugin=require('./plugins/basic.js');
const FileListPlugin=require('./plugins/file-list-plugin.js');
const CleanPlugin=require('./plugins/clean-plugin.js');
const CountTimePlugin=require('./plugins/count-time.js')
const EmptyPlugin=require('empty-webpack-plugin');
const {CleanWebpackPlugin} =require('clean-webpack-plugin');
module.exports = {
    resolveLoader:{
        modules: ['node_modules', 'loaders']
    },
    entry: {
        index: './src/js/index.js'
    },
    module: {

        rules: [
		
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            {
                filename: 'index.html',
                title: 'Output Management',
                template: './src/views/index.html'
            }
        ),
        new HelloWorldPlugin({a:1}),
        new FileListPlugin(),
        new EmptyPlugin({exclude:'a'}),
        new CountTimePlugin()
    ],
    output: {
        filename: `[name].bundle.js`,
        path: path.resolve(__dirname, `dist`)
    }
};