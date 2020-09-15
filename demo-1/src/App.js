import {
    defineComponent,
    h
} from '@vue/runtime-core'
// import { Circle } from "../src/components/Circle";
export default defineComponent({
    render() {
        const vnode = h('rect', {
            x: 100,
            y: 500
        },
        //  [
        //     h(Circle),
        // ]
        )
        console.log('挂载虚拟节点')
        return vnode
    }
})