const path = require("path");
const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "./src/js/Index.js"),
    list: path.resolve(__dirname, "./src/js/List.js"),
    detail: path.resolve(__dirname, "./src/js/Detail.js"),
  },
  output: {
    path: path.resolve(__dirname, "./docs"),
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: path.resolve(__dirname, "node_modules"),
        query: {
          presets: ["latest"],
        },
      },
      {
        test: /\.tpl$/,
        loader: "ejs-loader",
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE__ENV === "development",
            },
          },
          // 'style-loader',
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins:function(){
                return [autoprefixer('last 5 versions')]
              }
            },
          },
          'sass-loader'
        ],
      },
      {
        test:/\.(png|jpg|jpeg|gif|ico)$/i,
        loader:[
          'url-loader?limit=1024&name=img/[name]-[hash:16].[ext]',
          'image-webpack-loader'
        ]
      }
    ],
  },
  plugins:[
    new uglifyjsWebpackPlugin(),
    new htmlWebpackPlugin({
      minify:{
        removeComments:true,   // 删除注释
        collapseWhitespace:true,  // 删除空格换行
      },
      filename:'index.html',
      template:path.resolve(__dirname,'src/index.html'),
      title:'小米商城',
      chunksSortMode:'manual', // 要求按照下面chunks数组中的顺序进行排列
      chunks:['index'],
      excludeChunks:['node_modules'],
      hash:true
    }),
    new htmlWebpackPlugin({
      minify:{
        removeComments:true,   // 删除注释
        collapseWhitespace:true,  // 删除空格换行
      },
      filename:'list.html',
      template:path.resolve(__dirname,'src/list.html'),
      title:'小米商城',
      chunksSortMode:'manual', // 要求按照下面chunks数组中的顺序进行排列
      chunks:['list'],
      excludeChunks:['node_modules'],
      hash:true
    }),
    new htmlWebpackPlugin({
      minify:{
        removeComments:true,   // 删除注释
        collapseWhitespace:true,  // 删除空格换行
      },
      filename:'detail.html',
      template:path.resolve(__dirname,'src/detail.html'),
      title:'小米商城',
      chunksSortMode:'manual', // 要求按照下面chunks数组中的顺序进行排列
      chunks:['detail'],
      excludeChunks:['node_modules'],
      hash:true
    }),
    // new htmlWebpackPlugin({
    //   minify:{
    //     removeComments:true,   // 删除注释
    //     collapseWhitespace:true,  // 删除空格换行
    //   },
    //   filename:'index2.html'
    // }),
    // css单独提取出来
    new miniCssExtractPlugin({
      filename:'css/[name].css'
    })

  ],
  devServer:{
    watchOptions:{
      ignored:"/node_modules/",
    },
    host:"localhost",
    port:5000
  }
};
