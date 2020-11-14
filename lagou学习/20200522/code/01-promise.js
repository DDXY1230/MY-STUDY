// Promise 的目标:增强在使用JavaScript语言进行异步编程的编程体验
// 1.执行流程问题
// setTimeout(() => console.log('A'), 0)
// setTimeout(() => console.log('B'), 1000)
// Promise.resolve().then(() => {
// setTimeout(() => console.log('C'), 0)
// setTimeout(() => console.log('D'), 1000)
// console.log('E')
// Promise.resolve().then(() => console.log('F'))
// }).then(() => console.log('G'))

// setTimeout(() => console.log('H'), 0)
// setTimeout(() => console.log('I'), 1000)
// -----------------------------------------
// 2.Promise.all()