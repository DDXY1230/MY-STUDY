import {
    defineComponent,
    h
} from "@vue/runtime-core";

export default defineComponent({
    render() {
        return h('circle', {
            x: 100,
            y: 200
        })

    }
})