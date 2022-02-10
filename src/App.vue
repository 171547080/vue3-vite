<template>
  <Topic></Topic>
  <div class="main">
    <InnerFrame>
      <router-view></router-view>
    </InnerFrame>
  </div>
</template>

<script>
import Topic from "./components/ifram/Topic.vue";
import InnerFrame from "./components/ifram/InnerFrame.vue";
export default {
  name: "app",
  components: {
    Topic,
    InnerFrame,
  },
};
</script>

<style lang="less">
@import "./components/inside/reset";
.main {
  margin: 0 0;
}
</style>
