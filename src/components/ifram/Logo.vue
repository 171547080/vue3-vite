<template>
  <div class="logo-container">
    <img class="logo-img" :src="LogoUrl" />
    <div class="logo-text">{{ text }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "Topic",
  setup(props, context) {
    const LogoUrl = new URL('../../assets/logo.png',import.meta.url).href
    const text = ref("GCloud多云管理平台");
    return {
      LogoUrl,
      text,
    };
  },
});
</script>
<style lang="less" scoped>
.logo-container{
  height: 100%;
  padding: 5px auto;
.logo-img {
  display: inline-block;
  vertical-align: middle;
  width: auto;
  height: 30px;
  position: relative;
}

.logo-text {
  display: inline-block;
  font-size: 20px;
  margin-left: 12px;
  height: 30px;
  color: #fff;
}
}

</style>
