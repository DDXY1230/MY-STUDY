const path = require('path')
const fs = require('fs')
const ejs = require('ejs')
const babylon = require('babylon')// 用来把源代码转成语法树
const babelType = require('babel-types')// 用来判断某个节点是否指定,或者用来生成一个新节点
const babelTravers = require('babel-traverse').default // 用来遍历语法树的节点,并且对节点进行增删改
const babelGenerato = require('babel-generator') // 用来把语法树重新变成代码
const {join,dirname} = require('path').posix // 为了保证不同的操作系统的一致性
const mainTemplate = fs.readFileSync('./main.ejs','utf-8')
class Compiler{
  constructor(config) {
    this.config = config
  }
  run() {
    let {entry} = this.config
    this.entry = entry// 这是入口模块,相对于根目录的路径
    this.modules = {}// 这里存放我们所有的模块
    this.buildModule(entry)
    this.emitFiles()// 完成后要根据this.module对象产生一个bundle文件
  }
  buildModule(moduleId) {
    let originalSource = fs.readFileSync(moduleId, 'utf-8')
    const ast = babylon.parse(originalSource)
    const dependencies = [] // 声明一个依赖的数组,里面房着本模块所依赖的模块id
    babelTravers(ast, {
      CallExpression: (nodePath) => {
        if(nodePath.node.callee.name == 'require') {
          let node = nodePath.node
          node.callee.name = "__webpack_require__"
          let moduleName = node.arguments[0].value
          let dependencyModuleId = './' + join(dirname(moduleId),moduleName)
          dependencies.push(dependencyModuleId)
          node.arguments = [babelType.stringLiteral(dependencyModuleId)]
        }
      }
    })
    let {code} = babelGenerato(ast)
    this.modules[moduleId] = code
    //递归遍历本模块的依赖
    dependencies.forEach(dependency => {
      this.buildModule(dependency)
    })
  }
  emitFiles() {
    let {output} = this.config
    let outputFile = join(output.path,output.filename)
    let bundle = ejs.compile(mainTemplate)({
      entry: this.entry,
      module: this.modules
    })
    fs.writeSync(outputFile,bundle)
  }
}
const webpack = function (webpackOptions,callback) {
  let compiler = new Compiler(webpackOptions)
  compiler.run()
  return compiler
}
module.exports = webpack