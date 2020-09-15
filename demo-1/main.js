// console.log('脚手架搭建成功')
// import {
//     createRenderer
// } from '@vue/runtime-core'
// import * as PIXI from 'pixi.js'
// console.log('pixi', PIXI)
// import { Application } from 'pixi.js'
import App from './src/App'
import {createApp} from './src/runtime-canvas'
import { getRootContainer } from "./src/game";


// 渲染器
// const renderer = createRenderer({})
// console.log(renderer)
// const game = new Application({
//     width: 750,
//     height: 1080
// })
// console.log(game)
// // 将游戏视图显示出来
// document.body.append(game.view)
// 跟节点挂载
// canvas -> canvas api ->pixijs  游戏引擎库egret
createApp(App).mount(getRootContainer())