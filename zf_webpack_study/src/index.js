import './test1'
import './test2'
import './index.css'
import './sass.scss'
import './less.less'
import './font.css'

const logo = require('./images/samoye.jpg')

console.log(logo)
const img = new Image()
img.src = logo
img.style.width = '100px'
document.body.appendChild(img)
// import React from 'react'
// import ReactDOM from 'react-dom'
// ReactDOM.render((<div>这里是react渲染出来的内容</div>),document.getElementById('root'))
// console.log(11)
