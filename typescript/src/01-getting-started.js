// @flow
/**  vscode 自带检测JavaScript代码,所以没有关闭code -》 setting
搜索框搜索JavaScript validate  就会:number划红线,关闭即可
*/
function sum (a:number, b:number) {
    return a + b
}
console.log(sum(10,10))
console.log(sum(110, 1))
/**以上代码直接用node xxx运行会报错,应该先yarn flow启动flow
 * 才行
 * 先要有个flow的配置文件
 * yarn flow init
 * 完成之后会有一个.flowconfig的配置文件
 * 然后在文件开头添加\aite flow
 * 有了这个配置文件之后就可以执行yarn flow了
 * 第一次启动flow会比较慢,因为会启动一个后台服务去监视我们的文件
 * 后续再执行就会快很多,因为后台服务已经启动了
 * 
 * flow只是在开发环境用来检测变量类型,
 * 当项目上线的时候需要移除变量冒号后面的类型检测
 * 这时候可以安装一个flow
 * 可以安装一个
 * yarn add flow-remove-types --dev
 * 注意:types后面有s
 * 安装之后,用yarn flow检测通过就可以
 * 用  yarn flow-remove-types src -d dist
 * dist是输出目录 
 * src是指跟src平级的dist文件,如果是点.
 * 那么就是当前目录
 * 
 * 之后在dist目录下就可以找到我们转换过后的结果
 * dist目录下的文件的类型检测就被清除了,这个目录就可以在
 * 生产环境下面使用了
 * 
 * 很多情况下我们会使用第三方插件帮我们处理这些事情
 * 常用的有babel
 * 以下来记录babel的使用方式
 * 安装
 * yarn add @babel/core @babel/cli @babel/preset-flow --dev
 * 解释:
 *   @babel/core是babel的核心模块
 *   @babel/cli是babel的命令行工具
 *   @babel/preset-flow 转换flow的方式
 * 安装完成之后我们还要添加一个babel的
 * 配置文件.babelrc
 * hhh
 */