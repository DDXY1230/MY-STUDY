class Promise {
  constructor(fn) {
    this.state = 'initial'
    this.successes = []
    this.errors = []
    let resolve = (data) => {
      this.state = 'fulfilled'
      this.successes.forEach(item => item(data))
    }
    let reject = (error) => {
      this.state = 'failed'
      this.errors.forEach(item => item(error))
    }
    fn(resolve, reject)
  }
  then(success, error) {
    this.successes.push(success)
    this.errors.push(error)
  }
}
let p = new Promise(function(resolve, reject) {
  setTimeout(() => {
    let num = Math.random()
    if( num > .5) {
      resolve('yes')
    }else {
      reject('no')
    }
  }, 5000);
})
p.then((data) => {
  console.log('成功',data)
},(error) => {
  console.log('失败', error)
})