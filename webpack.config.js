const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const devserver = require("./webpack/devserver");
const extractCSS = require("./webpack/extractcss");
const uglifyJs = require("./webpack/uglifyjs");
const babel = require("./webpack/babel");

const PATHS = {
    src: path.join(__dirname, "src"),
    build: path.join(__dirname, "build")
};


const common = merge([
    {
        entry: PATHS.src + "/js/app.jsx",
        output: {
            path: PATHS.build,
            filename: "js/[name].js"
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: PATHS.src + "/index.html"
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: "common"
            })
        ]
    },
    extractCSS(),
    babel()
]);



module.exports = env => {
    if (env === "production") {
        return merge([
            common,
            uglifyJs()
        ]);
    }
    if (env === "development") {
        return merge([
            common,
            devserver()
        ]);
    }
}




