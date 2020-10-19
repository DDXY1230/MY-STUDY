<template>
  <div>
    <!-- label -->
    <label for="" v-if="label">{{ label }}</label>
    <!--  -->
    <slot></slot>
    <!-- 错误信息 -->
    <p class="error" v-if="error">{{ error }}</p>
    <!-- <p>{{ form.rules }}</p> -->
  </div>
</template>
<script>
import Schema from "async-validator";
export default {
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      error: "",
    };
  },
  mounted() {
    this.$on("validate", () => {
      console.log("开始校验");
      this.validate();
    });
  },
  methods: {
    validate() {
      // 校验规则  校验的值
      const rules = this.form.rules[this.prop];
      // 当前值
      const value = this.form.model[this.prop];
      // 创建一个校验器
      const schema = new Schema({ [this.prop]: rules });
      // 去做校验
      return schema.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
            console.log(errors)
          this.error = errors[0].message;
        } else {
          this.error = "";
        }
      }); // 这里返回的是一个promise
    },
  },
};
</script>
<style scoped>
.error {
  color: red;
}
</style>