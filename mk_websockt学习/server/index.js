const WebSocket = require('ws')
const wss = new WebSocket.Server({port: 3000})
wss.on('connection', function connection(ws) {
  console.log('one client is connected')
  // 接收客户端发过来的消息
  ws.on('message', function(msg) {
    console.log('连接成功', msg)
    // ws.send(msg)
    // 往所有的客户端去广播消息
    wss.clients.forEach((client) => {
      // 判断非自己的客户端
      if(ws !== client && client.readyState === WebSocket.OPEN)
      client.send(msg)
    })
  })
  // 主动发送消息给客户端
  // ws.send('服务器发送给客户端消息')
})