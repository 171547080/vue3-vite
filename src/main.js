import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// ant-design-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
//import * as Icons from '@ant-design/icons-vue'
// element-plus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)
app.config.productionTip = false;
// 添加Pinia
app.use(createPinia())

// 全局引入 ant-design ui库
app.use(Antd)


//  引入ElementPlus
//app.use(ElementPlus)

// 全局路由
app.use(router).mount('#app')

/* 全局引入 ant-design/icons-vue 图标
const icons = Icons;
for(const i in icons){
    app.component(i,icons[i])
}
*/

app.config.globalProperties.$platform = 'xadmin'
console.error('环境变量=>',import.meta.env)