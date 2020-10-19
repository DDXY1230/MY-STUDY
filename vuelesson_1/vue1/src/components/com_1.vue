<template>
  <div>
    <p>
      <!-- 默认插槽 -->
      <slot></slot>
    </p>
    <p>
      <!-- 自定义插槽 -->
      <slot name="price"></slot>
    </p>
    <p>
        <!-- 作用域插槽 -->
        <slot :foo='foo'></slot>
    </p>
  </div>
</template>
<script>
export default {
    data() {
        return{
            foo:'1233'
        }
    }
}
</script>