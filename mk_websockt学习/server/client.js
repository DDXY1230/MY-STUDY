const WebSocket = require('ws')
const ws = new WebSocket('ws://127.0.0.1:3000', {
  headers: {
    token: '112233'
  }
})
// 这是在服务端进行鉴权的方式,如果在浏览器端那么参数只能携带在url的后面