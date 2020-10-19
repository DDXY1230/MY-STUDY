<template>
  <div>
    {{ model.username }}
    <KForm :model="model" :rules="rules" ref="form">
      <KFormItem label="用户名：" prop="username">
        <KInput v-model="model.username" placeholder="请输入用户名"></KInput>
      </KFormItem>

      <KFormItem label="密码：" prop="password">
        <KInput
          v-model="model.password"
          placeholder="请输入密码"
          type="password"
        ></KInput>
      </KFormItem>
      <KFormItem>
        <button @click="login">登陆</button>
      </KFormItem>
    </KForm>
  </div>
</template>
<script>
import KFormItem from "./form/KFormItem";
import KInput from "./form/KInput";
import KForm from "./form/KForm";
export default {
  data() {
    return {
      model: {
        username: "tom",
        password: "123",
      },
      rules: {
        username: [{ required: true, message: "请必须输入用户名" }],
        password: [{ required: true, message: "请必须输入用户名" }],
      },
    };
  },
  components: {
    KInput,
    KFormItem,
    KForm,
  },
  methods: {
    login() {
      this.$refs.form.validate((isValid) => {
        if (isValid) {
          console.log("登陆成功");
        } else {
          console.log("登陆失败");
        }
      });
    },
  },
};
</script>