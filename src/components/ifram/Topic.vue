<template>
  <div class="topic">
    <div class="trigger">
      <UnorderedListOutlined class="open-button" />
      <!-- <el-icon class="open-button"><Grid :color="'#FFF'" :size="30" /></el-icon> -->
    </div>
    <div class="logo"><Logo></Logo></div>
    <div class="leader"><Leader :data="leader"></Leader></div>
    <div class="entrance">
      <div>用户</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
// import { Grid } from "@element-plus/icons-vue";
import { UnorderedListOutlined } from "@ant-design/icons-vue";
import Logo from "./Logo.vue";
import Leader from "./Leader.vue";
export default defineComponent({
  name: "Topic",
  components: {
    Logo,
    Leader,
    // Grid,
    UnorderedListOutlined,
  },
  setup(props, context) {
    const leader = ref([
      { name: "system", text: "系统管理" },
      { name: "server", text: "服务管理" },
    ]);
    return {
      leader,
    };
  },
});
</script>
<style lang="less" scoped>
@import "../inside/main";

.topic {
  background: black;
  height: 60px;
  padding: 0px 0px;
  padding-left: 20px;
  // display: flex;
  // flex-direction: row;
  color: #fff;
  .logo {
    margin-right: 30px;
    display: inline-block;
  }
  .trigger {
    display: inline-block;
    padding-bottom: 12px;
    margin-right: 15px;
    vertical-align: bottom;
    color: #fff;
    cursor: pointer;
      transition: background-color 0.3s;
      // &:hover {
      //   background-color: #429f90;
      // }
    .open-button {
      font-size: 35px;
    }
  }
  .leader {
    display: inline-block;
  }

  .entrance {
    right: 0px;
    top: 0px;
    float: right;
  }
  .entrance {
    min-height: 60px;
    padding: 0px 10px;
    div {
      display: inline-block;
      height: 100%;
      padding: 0 15px;
      text-align: center;
      line-height: 60px;
      vertical-align: middle;
      font-size: 15px;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      transition: background-color 0.3s;
      &:hover {
        background-color: #429f90;
      }
    }
  }
}
</style>
