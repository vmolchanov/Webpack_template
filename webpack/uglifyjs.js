const webpack = require("webpack");

module.exports = () => {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    warnings: false
                }
            })
        ]
    };
}

