<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: Object,
  },
  provide() {
    return {
      form: this,
    };
  },
  methods: {
    validate(cb) {
      cb(true);
      // 检测所有的表单项目
      // 所有的校验通过才行
      console.log(this.$children)
      const tasks = this.$children
        .filter((item) => item.prop) // 必须拥有prop属性的FormItem留下
        .map((item) => item.validate());

      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    },
  },
};
</script>