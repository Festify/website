import webpack from "webpack";
import path from "path";

export default {
    module: {
        rules: [
            {
                test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?name=/[hash].[ext]"
            },
            { test: /\.json$/, loader: "json-loader" },
            {
                loader: "babel-loader",
                test: /\.js?$/,
                exclude: /node_modules/,
                query: { cacheDirectory: true }
            }
        ]
    },
    context: path.join(__dirname, "src"),
    entry: {
        app: ["./js/app"]
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "[name].js"
    },
    externals: [/^vendor\/.+\.js$/],

    plugins: [
        new webpack.ProvidePlugin({
            "fetch": "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
        })
    ],
};
