const WebSocket = require('ws')
const wss = new WebSocket.Server({
  port: 3000
})
let num = 0
let group = {}
wss.on('connection', function connection(ws) {
  console.log('one client is connected')
  // 接收客户端发过来的消息
  ws.on('message', function (msg) {
    console.log('连接成功', msg)
    // ws.send(msg)
    // 往所有的客户端去广播消息
    const msgObj = JSON.parse(msg)
    if (msgObj.event === 'enter') {
      ws.userName = msgObj.message
      ws.roomId = msgObj.roomId
      if(typeof group[ws.roomId] === 'undefined'){
        group[ws.roomId] = 1
      }else {
        group[ws.roomId] ++
      }
      num++
    }
    wss.clients.forEach((client) => {
      // 判断非自己的客户端
      // if(ws !== client && client.readyState === WebSocket.OPEN){
      if (client.readyState === WebSocket.OPEN && client.roomId === ws.roomId) {

        msgObj.userName = ws.userName
        // msgObj.num = wss.clients.size
        msgObj.num = group[ws.roomId]
        client.send(JSON.stringify(msgObj))
      }
    })
  })
  // 主动发送消息给客户端
  // ws.send('服务器发送给客户端消息')

  // 当有人断开离开聊天室的时候
  ws.on('close', function () {
    if (ws.userName) {
      group[ws.roomId] --
    }
    let msgObj = {}
    wss.clients.forEach((client) => {
      // 判断非自己的客户端
      // if(ws !== client && client.readyState === WebSocket.OPEN){
      if (client.readyState === WebSocket.OPEN && ws.roomId === client.roomId) {

        msgObj.userName = ws.userName
        // msgObj.num = wss.clients.size
        msgObj.num = group[ws.roomId]
        msgObj.event = 'out'
        client.send(JSON.stringify(msgObj))
      }
    })

  })
})