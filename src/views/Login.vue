<template>
  <div>{{ title }}</div>
  <div>{{ msg }}</div>
  <div>登录用户 : {{ name || '未登录' }}  <a-button type="primary" @click="login">登录</a-button> <a-button type="error" @click="logout">登出</a-button></div>
  <div>用户角色 : {{ isAdmin?'管理员':'普通用户' }}</div>
  <router-link to="/">跳转到首页页面</router-link>
  <div class="test-scroll">
    测试滚动条
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Button } from 'ant-design-vue';
import { storeToRefs } from "pinia";
import { useUserStore } from "../store/pinia/user";
export default defineComponent({
  name: "Login",
  setup(props, context) {
    const user = useUserStore()
    const { name, isAdmin } = storeToRefs(user)
    const login = () => {
      user.login('admin','123456')
    }
    const logout = () => {
       user.logout()
    }

    const title = ref("登录");
    const msg = ref("登录页面");

    console.error(name)
    
    return {
      title,
      msg,
      name,
      isAdmin,
      login,
      logout
    };
  },
});
</script>
<style lang="less" scoped>
.test-scroll{
  height: 160vh;
  width: 100%;
  border: #123321 solid 1px;
  text-align: center;
}
</style>
