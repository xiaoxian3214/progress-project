/*
 * @Author: xiaoxian3214 1172242099@qq.com
 * @Date: 2023-06-13 10:46:27
 * @LastEditors: xiaoxian3214 1172242099@qq.com
 * @LastEditTime: 2023-06-13 15:43:57
 * @FilePath: /alarm-progress/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AlertProgress',
      component: () => import('../views/AlertProgress.vue')
    },
  ]
})

export default router
