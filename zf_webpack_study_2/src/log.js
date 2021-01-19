// 重写console.log, 只在开发环境中打印,生产环境中不打印
let oldLog = console.log
console.log = function(...args) {
  if(process.env.NODE_ENV == 'development') {
    oldLog.apply(console, args)
  }
}