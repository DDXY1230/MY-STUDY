const path = require("path");
const base = require("./webpack.base.js");
const { samrt } = require("webpack-merge");
module.exports = samrt(base, {
  mode: "development",
  devtool: "cheap-source-map",
  watch: true, // 开启就会文件随时变化都会打包
  optimization: {
    minimize: false,
    //这里放一些优化的插件
    minimizer: [],
  },
  //devServer有个特点,如果你是用来devServer,那么所有生成的文件会写到内存里
  //而不回写到硬盘里,为了速度
  devServer: {
    //不配也行,但是不配的话,显示的目录就是当前文件夹的根目录
    contentBase: path.join(__dirname, 'dist-1/'),// 配了之后以此作为根目录在浏览器中显示
    port: 8081,// 自定义端口号
    host: 'localhost',
    compress: true,// 压缩
    // before(app) {
    // 这个是用来模拟返回数据的
    //   // webpack-dev-server内部其实就是一个express服务器
    //   app.get('/api/users', function(req,res) {
    //     console.log(req.url)
    //     res.json([{id:1,name: 'zhufeng'}])
    //   })
    // },
    proxy: {
    // "/api": "http://localhost:3000"
      "/api": {// api/users
        target: "http://localhost:3000",
        pathRewrite: {'^/api': ''}// 重写请求路径,变成/users
      }
    },
  },
});
