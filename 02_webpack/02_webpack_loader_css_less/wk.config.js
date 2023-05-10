const path = require("path")
module.exports = {
  entry:"./src/main.js",
  output: {
    filename : "bundle.js",
    path: path.resolve(__dirname, "./build")
  },
module: {
  rules: [
    {
      // 告诉webpack匹配什么样的文件
      test:/\.css$/, 
      // use: [ 
        //use 中多个loader的使用顺序是从后向前， 所以要把 {loader: "css-loader"}放在下面先执行
       
        // {loader:"style-loader"},
        // {loader: "css-loader"},
        // {loader:"postcss-loader"}
       
      // ]

      use: [ 
        "style-loader", 
        "css-loader", 
        "postcss-loader"
        // {loader:"postcss-loader",
        //  options: {
        //   postcssOptions: {
        //     plugins:[
        //       "autoprefixer"
        //     ]
        //   }
      
          
        //  }}
      ]
    },
    {
      test:/\.less$/,
      use: ["style-loader", "css-loader", "less-loader", "postcss-loader"]
    }
  ]
}
}