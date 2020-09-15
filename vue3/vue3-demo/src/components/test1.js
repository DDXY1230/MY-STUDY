import {
    onMounted
} from "vue";

export const test = () => {
    onMounted(() => {
        console.log("挂载了，不信你看看3");
    });
}