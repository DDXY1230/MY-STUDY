const WebSocket = require('ws')
const wss = new WebSocket.Server({port: 3000})
wss.on('connection', function connection(ws) {
  console.log('one client is connected')
  // 接收客户端发过来的消息
  ws.on('message', function(msg) {
    console.log('连接成功', msg)
  })
  // 主动发送消息给客户端
  ws.send('服务器发送给客户端消息')
})