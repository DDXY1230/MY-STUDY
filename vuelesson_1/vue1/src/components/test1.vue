<template>
    <div>
        <h3>插槽</h3>
        <com_1>
            这是默认插槽
            <!-- <template v-slot:default>默认插槽用default作为参数</template> -->
            <template v-slot:default="slotProps">
                来自自组件的数据：{{slotProps.foo}}
            </template>
            <template v-slot:price>自定义price插槽</template>
            <!-- 以下无用 -->
            <!-- <template v-slot:custome="slotProps">
                {{slotProps.foo}}
            </template> -->
        </com_1>
    </div>
</template>
<script>
import com_1 from './com_1'
export default {
    components: {
        com_1
    }
}
</script>