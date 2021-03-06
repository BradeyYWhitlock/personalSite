var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = env => {
  return {
    entry: [path.join(__dirname, "../src/index.tsx")],
    module: {
      rules: [
        {
          test: /\.(tsx|ts|js|jsx)$/,
          exclude: /node_modules/,
          loader: "ts-loader"
        },
        {
          test: /\.(scss|css)$/,
          loader: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          loader: "file-loader"
        }
      ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"]
    }
  };
};
