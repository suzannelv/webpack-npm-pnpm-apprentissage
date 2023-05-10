const path = require("path")
const {VueLoaderPlugin} = require("vue-loader/dist/index")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {DefinePlugin} = require("webpack")


module.exports = {
  mode: "development",
  entry:"./src/main.js",
  output: {
    filename : "bundle.js",
    path: path.resolve(__dirname, "./build"),
    // assetModuleFileName:"abc.png"
  },
  resolve: {
    extensions: [ ".js", ".json", ".vue", ".jsx", ".ts", ".tsx"],
    //在层级比较深的情况下可以配置别名
    alias: {
      utils: path.resolve(__dirname, "./src/utils")
    }
  },
  devServer: {
    hot:true,
    port:8888
  },
  module: {
  rules: [
    {
      // 告诉webpack匹配什么样的文件
      test:/\.css$/, 
      use: [ "style-loader", "css-loader", "postcss-loader"]
    },
    {
      test:/\.less$/,
      use: ["style-loader", "css-loader", "less-loader", "postcss-loader"]
    }, 
    {
      test:/\.(png|jpe?g|svg|gif)$/,
      type:"asset",
      parser: {
        dataUrlCondition: {
          maxSize: 60 * 1024
        }
      },
      generator: {
        // 占位符
        // name：指向原来的图片名称
        // ext: extension name
        // hash: webpack 生成的哈希值，保证生成的东西不会重复, 截图前8位
        filename: "img/[name]_[hash:8][ext]"
      }
    },
    {
      test: /\.js$/,
      use: [
        "babel-loader"
      ]

    },
    {
      test: /\.vue$/,
      loader: "vue-loader"
    }
  ]
},

  plugins:[
  new VueLoaderPlugin(),
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: "projet wk",
    // 也可以自己引入HTML模板
    // template:"./index.html"
  }
  ),
  new DefinePlugin({
    "BASE_URL": "'./'",
    "coderwhy":"'why'",
    "counter": "123"
  })
]
}