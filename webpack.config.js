const path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './dist/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    mode: 'development',
}