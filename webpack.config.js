const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        app: './resources/js/index.js',
    },
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
          {
              test: /\.s[ac]ss$/i,
              use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "sass-loader",
              ]
          }
      ]
    },
    /** 
     * PARA COMPILAR CSS
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    */
    plugins: [new MiniCssExtractPlugin()],
};