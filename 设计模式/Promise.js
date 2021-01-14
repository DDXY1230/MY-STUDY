class Promise {
  constructor(fn) {
    this.sucesses = []
    let resolve = (data) => {
      this.sucesses.forEach(item => item(data))
    }
    fn(resolve)
  }
  then(success) {
    this.sucesses.push(success)
  }
}

let p = new Promise(function (resolve) {
  setTimeout(function () {
    resolve('ok')
  })
}, 2000)
p.then(data => console.log(data))