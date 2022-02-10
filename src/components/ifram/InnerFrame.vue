<template>
  <div class="content">
    <div class="left-side">
      <LeftMenu></LeftMenu>
    </div>
    <div class="right-side">
      <div class="right-contnet">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import LeftMenu from "./LeftMenu.vue";
export default defineComponent({
  name: "InnerFrame",
  components: {
    LeftMenu,
  },
  setup(props, context) {
    const text = ref("GCloud多云管理平台");
    return {
      text,
    };
  },
});
</script>
<style lang="less" scoped>
@left-side-width: 250px;
@topic-height: 60px;
.content {
  display: flex;
  flex-direction: row;
  height: calc(100vh - @topic-height);
}
.left-side {
  display: inline-block;
  vertical-align: top;
  //   width: @left-side-width;
  //   width: 100%;
  background-color: #112233;
  height: 100%;
  display: flex;
}
.right-side {
  display: inline-block;
  vertical-align: top;
  height: 100%;
  //   width: calc(100% - @left-side-width);
  overflow: auto;
  flex: 1;
 .right-contnet{
     display: block;
 }
}
</style>
