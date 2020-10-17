class KPromise {
    constructor(handler) {
        handler(this._resolve.bind(this), this._reject.bind(this))
    }
    queue = {
        resolved: [],
        rejected: []
    }
    _resolve(val) {
        console.log('_resolve')
        let resolvedHandler
        while ((resolvedHandler = this.queue.resolved.shift()) && typeof resolvedHandler == 'function') {
            resolvedHandler(val)
        }
    }
    _reject(err) {
        console.log('_reject')
        let rejectedHandler
        while ((rejectedHandler = this.queue.rejected.shift()) && typeof rejectedHandler == 'function') {
            rejectedHandler(err)
        }
    }
    then(resolvedHandler, rejectedHandler) {
        // then中传入的函数都不能在这调用，
        //它需要等等当前这个Promise对象要执行的异步任务完成以后才调用
        // 我们需要把当前传入的两个函数现存储到一个队列（数组）中
        this.queue.resolved.push(resolvedHandler)
        this.queue.rejected.push(rejectedHandler)
    }
}