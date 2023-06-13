<!--
 * @Author: xiaoxian3214 1172242099@qq.com
 * @Date: 2023-06-13 14:32:49
 * @LastEditors: xiaoxian3214 1172242099@qq.com
 * @LastEditTime: 2023-06-13 16:11:52
 * @FilePath: /alarm-progress/src/components/ProgressCard/ProgressItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="progress-item">
    <div class="progress-item" :style="{ width: option.size + 'px', height: option.size + 'px' }">
      <ProgressCircle :progress="modelValue" :progressOption="option" />
      <div class="progerss-box">
        <p class="progress-value">{{ modelValue }}<span class="progress-icon">%</span></p>
        <p class="progress-text">异常分数</p>
      </div>
    </div>
    <div class="status-box" :style="{ width: option.size + 'px' }">
      <img class="icon" :src="iconList[status]" />
      <div>
        <p>检测状态</p>
        <p :class="{ 'normal': status===1, 'error': status===2}">{{ statusList[status] }}</p>
      </div>
    </div>
    <el-slider :model-value="props.modelValue"  @input="handleChange" />
  </div>
</template>
<script setup lang="ts">
import unknownIcon from '@/assets/weizhi@3x.png'
import normalIcon from '@/assets/zhengchang@3x.png'
import errorIcon from '@/assets/baojing@3x.png'
import { computed } from 'vue'
import ProgressCircle from './ProgressCircle.vue'
import { ProgressOption } from 'type.d.ts'
const iconList = [unknownIcon, normalIcon, errorIcon]
const statusList = ['未知', '正常', '异常']
type statusType = 0 | 1 | 2
const props = defineProps({
  modelValue: {
    type: Number,
    required: true
  },
  progressOption: {
    type: Object as () => ProgressOption,
    default: () => ({})
  },
  errorProgress: {
    type: Number,
    default: 50
  }
})
const option = computed(() => {
  const baseOption: ProgressOption = {
    radius: 100,
    strokeWidth: 20,
    backColor: '#E6E6E6',
    startColor: [123, 104, 238],
    endColor: [140, 153, 204],
    durtion: '1s',
  }
  Object.assign({ baseOption }, props.progressOption)
  baseOption.cy = baseOption.cx = baseOption.radius + baseOption.strokeWidth
  baseOption.size = (baseOption.radius + baseOption.strokeWidth) * 2
  return baseOption
})
const status: statusType = computed(() => {
  // 测试0为未知 0-50之间正常 大于50异常
  return !props.modelValue ? 0 : props.modelValue >= props.errorProgress ? 2 : 1
})
const emit = defineEmits(['update:modelValue'])

const handleChange = (e) => {
  console.log(e)
  emit('update:modelValue', e)
}
</script>
<style scoped>
.progress-item {
  position: relative;
  width: ;
}
.progerss-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.progress-value {
  font-size: 36px;
  color: rgba(123, 104, 238);
  font-weight: 600;
}
.progress-icon {
  font-size: 24px;
}
.progress-text {
  font-size: 24px;
  color: #ccc;
}
.icon {
  width: 48px;
  height: 48px;
  margin-right: 24px;
}
.status-box {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom:48px;
}
.normal{
  color:blue;
}
.error{
  color:red;
}
</style>
