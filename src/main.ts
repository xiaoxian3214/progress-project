/*
 * @Author: xiaoxian3214 1172242099@qq.com
 * @Date: 2023-06-13 10:46:27
 * @LastEditors: xiaoxian3214 1172242099@qq.com
 * @LastEditTime: 2023-06-13 11:37:44
 * @FilePath: /alarm-progress/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './assets/main.css'
import 'element-plus/dist/index.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(router)

app.mount('#app')
