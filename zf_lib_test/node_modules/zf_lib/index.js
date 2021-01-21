if(process.env.NODE_ENV === 'production'){
  module.exports = require('./dist-0/zfmath.min.js')
}else {
  module.exports = require('./dist-0/zfmath.js')
}