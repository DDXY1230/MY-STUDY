import {
    createRenderer
} from '@vue/runtime-core'
import {
    Graphics
} from "pixi.js";
const renderer = createRenderer({
    createElement(type) {
        console.log(type)
        //创建一个矩形
        let element
        if (type === 'rect') {
            element = new Graphics()
            element.beginFill(0xff0000)
            element.drawRect(0, 0, 500, 500)
            element.endFill()
        } 
        // else
        // if (type === 'circle') {
        //     element = new Graphics()
        //     element.beginFill(0xffa000)
        //     element.drawCircle(0, 0, 30)
        //     element.endFill()
        // }
        return element
    },
    insert(el, parent) {
        console.log(el, parent)
        parent.addChild(el)
    },
    patchProp(el, key, prevValue, nextValue) {
        console.log(el)
        if (key === 'x') {
            el.x = nextValue
        } else
        if (key === 'y') {
            el.y === nextValue
        }
    }
})
export function createApp(rootComponent) {
    return renderer.createApp(rootComponent)
}