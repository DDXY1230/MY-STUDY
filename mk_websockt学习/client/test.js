const WebSocket = require('ws')

const ws = new WebSocket('ws://127.0.0.1:3000')
ws.on('open', function() {
  console.log('test file is connected to Server')
  ws.send('this message is from a js file')
  ws.on('message', function(msg) {
    console.log(msg)
  })
})