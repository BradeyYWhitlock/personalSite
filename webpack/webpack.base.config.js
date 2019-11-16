var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// function getConfigFile(env) {
//   return require(path.resolve(__dirname, `../config/${env}.js`));
// }

module.exports = env => {
  // const configFile = getConfigFile(env.NODE_ENV);
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
          test: /\.scss$/,
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
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "../dist/index.html",
        template: path.resolve(__dirname, "../src/index.html")
      })
    ],
    output: {
      path: path.resolve(__dirname, "../build/dist/"),
      publicPath: "/",
      filename: "bundle.min.js"
    },
    // externals: [{ Config: JSON.stringify(configFile) }],
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"]
    }
  };
};
