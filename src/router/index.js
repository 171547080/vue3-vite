import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
    redirect: {name:'welcome'},
    meta:{
        title:'首页'
    },
    children: [
    
    ],
  },
  {
    name: "welcome",
    path: "/welcome",
    meta: {
      title: "欢迎页面",
    },
    component: ()=> import('../views/Welcome.vue'),
  },
  {
    name: "login",
    path: "/login",
    meta: {
      title: "登录",
    },
    component:  ()=> import('../views/Login.vue'),
  }
];


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router