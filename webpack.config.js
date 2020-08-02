const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src/index.ts"),
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "Lodash练习",
            template: "./index.html"
        }),
        new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ["dist"] })
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: [path.resolve(__dirname, "dist")],
        hot: true,
        port: 8080,
        open: true,
        overlay: {
            warnings: true,
            errors: true
        },
        quiet: true,
        onListening() {
            console.log("打开 localhost:8080，在控制台查看");
        }
    },
    resolve: {
        extensions: [".js", ".ts"]
    }
};
