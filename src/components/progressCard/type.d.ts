/*
 * @Author: xiaoxian3214 1172242099@qq.com
 * @Date: 2023-06-13 13:56:58
 * @LastEditors: xiaoxian3214 1172242099@qq.com
 * @LastEditTime: 2023-06-13 13:57:26
 * @FilePath: /alarm-progress/src/components/progressCard/type.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
 // 定义进度条配置选项的类型
 export interface ProgressOption {
  radius: number;
  strokeWidth: number;
  backColor: string;
  startColor: [number, number, number];
  endColor: [number, number, number];
}