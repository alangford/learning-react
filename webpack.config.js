/**
 * Created by beebe on 4/24/2017.
 */
const path = require(`path`);
const HhtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports ={
  entry: `./app/index.js`,
    output: {
      path: path.resolve(__dirname, `dist`),
        filename: `index_bundle.js`
    },
    module:{
      rules: [
          { test: /\.(js)$/, use:`babel-loader`},
          {test: /\.css$/, use: [`style-loader`, `css-loader`]}
      ]
    },
    plugins: [new HhtmlWebpackPlugin({
        template: `app/index.html`
    })]
};