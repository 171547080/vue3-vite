import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(router).mount('#app')
console.error('环境变量=>',import.meta.env)