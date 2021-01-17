let express = require('express')
let app = express()
app.get('/api/users', function(req,res) {
  res.json([{id:1,name:'enenexiaohhh'}])
})
app.listen(3000)
