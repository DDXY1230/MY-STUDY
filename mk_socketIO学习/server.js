const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
io.on('connection', function(socket) {
  console.log('a socket is connected')
  socket.on('chatEvent', function(msg) {
    console.log(msg)
    // socket.send('server says: ' + msg)// 这种方法只能谁发送过来的返还给谁,无法广播
    socket.broadcast.emit('ServerMsg',msg)// 广播所有的都能接收到信息
  })
})
http.listen(3000, function() {
  console.log('server is running on 3000')
})