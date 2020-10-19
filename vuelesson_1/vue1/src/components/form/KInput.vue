<template>
  <div>
    <input :type="type" :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>
<script>
export default {
  inheritAttrs: false, // 去掉默认的继承行为,否则继承到div上面了，加了，然后v-bind="$attrs",把属性透传到input上面
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
      // 触发以下校验
      console.log('触发校验')
      this.$parent.$emit('validate')
    },
  },
};
</script>
<style lang="less">
</style>