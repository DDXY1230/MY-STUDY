<template>
  <p>
    <button @click="handleClick">+</button>
    count: {{count}} -----  double: {{double}}
  </p>
  <p>state.time: {{state.time}}</p>
  <p>boo: {{boo.foo}}</p>
</template>

<script>
import { ref, reactive, readonly, computed, watch, onMounted } from "vue";
export default {
  setup() {
    // 值类型用ref 比如string，number
    const count = ref(0);
    console.log(count);

    // {} [] 对象数组用reactive
    const state = reactive({ time: 0 });
    // 只读，不能修改
    const boo = readonly({foo:100})

    //响应式系统api
    //computed
    const double = computed(() => {
        return count.value * 2
    })

    //监听
    watch(double, (value) => {
        console.log(value)
    })
    //
    onMounted(() => {
        console.log('hhhhh')
    })

    const handleClick = () => {
      count.value++;
      state.time++;
    };
    return {
      count,
      handleClick,
      state,
      boo,
      double
    };
  },
};
</script>

<style>
</style>