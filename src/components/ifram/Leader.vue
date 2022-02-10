<template>
  <div class="leader-container">
    <div class="leader-item" v-for="(d, i) in data" :key="d.name + '_' + i">
      <div>{{ d.text }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRef } from "vue";

interface LeaderItem {
  name: string;
  text: string;
}
export default defineComponent({
  name: "Leader",
  props: {
    data: {
      type: Object,
      default: () => [],
    },
  },
  setup(props, context) {
    const data = props.data as Array<LeaderItem>;
    return {
      data,
    };
  },
});
</script>
<style lang="less" scoped>
.leader-container {
  height: 60px;
  .leader-item {
    display: inline-block;
    height: 100%;
    padding: 0 15px;
    text-align: center;
    line-height: 60px;
    vertical-align: middle;
    font-size: 15px;
    font-weight: bold;
    color: #FFF;
    cursor:pointer;
    transition: background-color .3s;
    &:hover{
      background-color: #426d9f;
    }
  }
}
</style>
