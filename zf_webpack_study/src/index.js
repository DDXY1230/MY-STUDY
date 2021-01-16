import './test1'
import './test2'
import './index.css'
let logo = require('./images/samoye.jpg').default
console.log(logo)
let img = new Image()
img.src = logo
img.style.width = '100px'
document.body.appendChild(img)