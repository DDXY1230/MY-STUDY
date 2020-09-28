(function () {
    const status = {
        pending: 0,
        fulfilled: 1,
        rejected: 2
    }
    class CustomePromise{
        constructor(func) {
            //初始状态
            this._status = status.pending
            this._value = null // 记录resolve函数传入的值
            this._error = null // 记录reject函数传入的值
            // 收集成功状态要执行的函数
            this.resolveArr = []
            // 收集失败状态要执行的函数
            this.rejectedArr = []

            this._handler (func)
        }
        // 接受外部传入的函数，调用外部传入的函数
        _handler(func) {
            let done = false // 控制函数只能执行一次
            func((value) => {
                if(done) return
                done = true
                // console.log(value)
                this._resolve(value)
            },(error) => {
                if(done) return
                done = true
                // console.log(error)
                this._reject(error)
            })
        }
        _resolve(value) {
            //把状态改成成功
            this._status = status.fulfilled
            this._value = value
            // 执行所有成功的函数
            this.resolveArr.forEach(item => item(this._value))
        }
        _reject(error) {
            // 把状态改成失败
            this._status = status.rejected
            this._error = error
            this.rejectedArr.forEach(item => item(this._error))
        }
        // 收集注册的成功状态或者失败状态要执行的函数
        then(resolvedFunc, rejectedFunc) {
            console.log(1)
            this._done(resolvedFunc, rejectedFunc)
        }
        // 收集注册成功或者注册失败状态要执行的函数
        _done(resolvedFunc, rejectedFunc) {
            console.log(2)
            // pending的时候收集
            let _resolvedFunc = typeof resolvedFunc === 'function' ? resolvedFunc : null
            let _rejectedFunc = typeof rejectedFunc === 'function' ? rejectedFunc : null
            // 收集
            if(this._status === 0) {
                console.log(3)
                if(_resolvedFunc) this.resolveArr.push(_resolvedFunc)
                if(_rejectedFunc) this.rejectedArr.push(_rejectedFunc)
            }else if(this._status === 1 && _resolvedFunc) {
                console.log(4)
                _resolvedFunc(this._value)
            }else if(this._status === 2 && _rejectedFunc) {
                console.log(5)
                _rejectedFunc(this._error)
            }
        }

    }
    window.CustomePromise = CustomePromise
})()