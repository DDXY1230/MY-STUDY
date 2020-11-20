// // gulp 的入口文件
// exports.foo = (done) => {
//         console.log('foo task working')
//         done()
//     }
//     // 安装gulp: yarn add gulp -D
//     /**
//      * glupfile.js
//      *  是入口文件
//      * yarn gulp foo  运行foo
//      * 最新版gulp约定任务是异步任务
//      * 所以后面要done()回调
//      */
// exports.default = done => {
//         console.log('这是一个默认任务')
//         done()
//     }
//     // gulp4.0以前的版本写法
// const gulp = require('gulp')
// gulp.task('bar', done => {
//     console.log('在gulp4.0以前的版本是这样写的,现在可以用但是已经不推荐了')
//     done()
// })
// --------------------------------------------------
const { series, parallel } = require('gulp')
const task1 = done => {
    setTimeout(() => {
        console.log('task1 working~~~')
        done()
    }, 1000)
}
const task2 = done => {
    setTimeout(() => {
        console.log('task2 working---')
        done()
    }, 1000)
}
const task3 = done => {
    setTimeout(() => {
        console.log('task3 working---')
    }, 1000)
}
exports.foo = series(task1, task2, task3) // 串行(需要等待上一个任务执行完才执行下一个任务)
exports.bar = parallel(task1, task2, task3) //并行(不需要等待上一个任务执行完毕就可以执行当前任务)