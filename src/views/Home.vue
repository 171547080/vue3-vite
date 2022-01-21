<template>
  <div>{{ title }}</div>
  <div>{{ msg }}</div>
  <div>子路由</div>
  <div class="router">
    <router-view></router-view>
  </div >
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";
  export default defineComponent({
    name: "Home",
    
    setup(props, context) {
    const title= ref('标题')
    const msg= ref('首页')
      return {
          title,
          msg
      };
    },
  });
</script>
<style lang="scss" scoped>
.router{
    padding: 10px;
    border: #123321 solid 1px;
}

</style>
