<template>
  <div>{{ title }}</div>
  <div>{{ msg }}</div>
  <router-link to='/'>跳转到首页页面</router-link>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";
  export default defineComponent({
    name: "Login",
    setup(props, context) {
    const title= ref('登录')
    const msg= ref('登录页面')
      return {
          title,
          msg
      };
    },
  });
</script>
