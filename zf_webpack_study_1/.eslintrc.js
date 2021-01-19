module.exports = {
  // root: true,// 是否是根配置
  "parser": "babel-eslint", // 把源代码转成语法树的工具
  "extends": "airbnb",
  // parserOptions: {// 解析器的选项,AST语法树解析
  //   sourceType: 'module',
  //   ecmaVersion: 2015
  // },
  env: {// 指定运行环境
    browser: true,
    node: true
  },
  rules: {
    // "indent": ['error', 4],
    // "no-console": 'error'
    "semi": false,
  }
  
}