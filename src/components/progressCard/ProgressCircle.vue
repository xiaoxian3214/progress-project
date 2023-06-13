<!--
 * @Author: xiaoxian3214 1172242099@qq.com
 * @Date: 2023-06-13 13:08:38
 * @LastEditors: xiaoxian3214 1172242099@qq.com
 * @LastEditTime: 2023-06-13 16:12:21
 * @FilePath: /alarm-progress/src/components/progressCard/ProgressCircle.vue
 * @Description: 通过svg实现进度环的渐变效果，el-progress貌似无法实现ui所需要的渐变效果
-->
<template>
  <svg
    :height="option.size"
    :width="option.size"
    x-mlns="http://www.w3.org/200/svg"
  >
    <!-- 背景圆环 -->
    <circle
      :r="option.radius"
      :cx="option.cx"
      :cy="option.cy"
      :stroke="option.backColor"
      :stroke-width="option.strokeWidth"
      fill="none"
    />
    <!-- 渐变色圆环 -->
     <circle
      v-for="(item, index) in arcArr"
      :key="index"
      :r="option.radius"
      :cx="option.cx"
      :cy="option.cy"
      :stroke="item.color"
      :stroke-width="option.strokeWidth"
      fill="none"
      transform="rotate(-90)"
      transform-origin="center"
      stroke-linecap="round"
    >
      <animate
        :to="item.arcLength"
        begin="0s"
        :dur="option.durtion"
        attributeName="stroke-dasharray"
        from="0,100000"
        fill="freeze"
      />
      </circle>
  </svg>
</template>

<script setup lang="ts">
import { defineProps, computed,watchEffect,ref } from 'vue';
import { ProgressOption } from 'type.d.ts'

// 定义组件的 props
const props = defineProps({
  progress: {
    type: Number,
    required: true,
  },
  progressOption: {
    type: Object as () => ProgressOption,
    default: () => ({}),
  },
});

// 渐变颜色计算函数
const gradientColor = (startRGB: number[], endRGB: number[], step: number) => {
  const [startR, startG, startB] = startRGB;
  const [endR, endG, endB] = endRGB;
  const sR = (endR - startR) / step;
  const sG = (endG - startG) / step;
  const sB = (endB - startB) / step;
  const colorArr: string[] = [];
  for (let i = 0; i < step; i++) {
    const color = `rgb(${sR * i + startR},${sG * i + startG},${sB * i + startB})`;
    colorArr.push(color);
  }
  return colorArr;
};

// 计算选项的响应式属性
const option = computed(() => {
  const baseOption: ProgressOption = {
    radius: 100,
    strokeWidth: 20,
    backColor: '#E6E6E6',
    startColor: [123, 104, 238],
    endColor: [140,153,204],
  };
  Object.assign(baseOption, props.progressOption);
  baseOption.cy = baseOption.cx = baseOption.radius + baseOption.strokeWidth;
  baseOption.size = (baseOption.radius + baseOption.strokeWidth) * 2;
  return baseOption;
});

let arcArr =ref([])
watchEffect(() => {
  // 计算渐变色圆环的数组
const circleLength = Math.floor(2 * Math.PI * option.value.radius);
const progressLength = props.progress/100 * circleLength;
const step = 100;
const colorArr =  props.progress? gradientColor(option.value.startColor, option.value.endColor, step):[];
 arcArr.value = colorArr.map((color, index) => ({
  // 计算每个渐变步骤的弧长
  arcLength: `${index * (progressLength / 100)},${circleLength}`,
  color,
})).reverse();
})

</script>

