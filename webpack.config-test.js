const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.config')

module.exports = {
    ...baseConfig,
    target: 'node',
    externals: [nodeExternals()],
    mode: 'development',
    devtool: "inline-cheap-module-source-map",
    output: {
        // use absolute paths in sourcemaps (important for debugging via IDE)
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },
    
}