<template>
  <div>
    这个是路由啊啊啊eee werer
    <HelloWorld
      msg="Welcome to Your Vue.js App"
      msg2="该项目添加了element"
      @some-event="onSomeEvent"
    />
  </div>
</template>
<script>
import HelloWorld from "./HelloWorld.vue";
export default {
  components: {
    HelloWorld,
  },
  methods: {
    onSomeEvent(msg) {
      console.log("Communition", msg);
    },
  },
};
</script>