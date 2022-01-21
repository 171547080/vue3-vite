<template>
  <div>{{ title }}</div>
  <div>{{ msg }}</div>
  <router-link to='/login'>跳转到登录页面</router-link>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";
  export default defineComponent({
    name: "Welcome",
    
    setup(props, context) {
    const title= ref('标题')
    const msg= ref('欢迎光临')
      return {
          title,
          msg
      };
    },
  });
</script>
