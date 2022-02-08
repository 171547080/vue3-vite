import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)
app.config.productionTip = false;
// 添加Pinia
app.use(createPinia())
// 全局引入 ant-design ui库
app.use(Antd)

// 全局路由
app.use(router).mount('#app')

app.config.globalProperties.$platform = 'xadmin'
console.error('环境变量=>',import.meta.env)