
import { Application } from 'pixi.js'

const game = new Application({
    width: 750,
    height: 1080
})
console.log(game)
// 将游戏视图显示出来
document.body.append(game.view)

export function getRootContainer() {
    return game.stage
}