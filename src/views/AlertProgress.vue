<!--
 * @Author: xiaoxian3214 1172242099@qq.com
 * @Date: 2023-06-13 11:19:59
 * @LastEditors: xiaoxian3214 1172242099@qq.com
 * @LastEditTime: 2023-06-13 15:57:12
 * @FilePath: /alarm-progress/src/views/AlertProgress.vue
 * @Description:这边是通过自定义组件实现的，当然也可以通过echarts来实现
-->
<template>
  <div class="alert-progress">
    <ProgressItem v-model="progressNum"  />
    <ProgressItem v-model="progressNum1" class="middle-item" />
    <ProgressItem v-model="progressNum2"  />
  </div>
</template>
<script setup lang="ts">
import ProgressItem from '../components/progressCard/ProgressItem.vue'
import { ref } from 'vue'
const progressNum = ref<Number>(0)
const progressNum1 = ref<Number>(49)
const progressNum2 = ref<Number>(80)
</script>

<style>
@media (min-width: 1024px) {
  .alert-progress {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.alert-progress {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.middle-item{
    margin: 0 32px 0;
}
</style>
