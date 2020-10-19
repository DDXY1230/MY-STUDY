<template>
  <div>
    <h3>grandson</h3>
    <div>{{ $attrs.msg2 }}</div>
    <el-button @click="$emit('some-event', 'some data from grandson')">
      从grandson传过来的数据
    </el-button>
    <h3>inject</h3>
    <p>{{ foo1 }}</p>
  </div>
</template>
<script>
export default {
  //以下两种写法的区别，第二种可以修改名字
  // inject: ['foo']
  inject: {
    foo1: { from: "foo" },
  },
};
</script>