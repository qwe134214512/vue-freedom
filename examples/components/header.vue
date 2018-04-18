<style type="text/less" lang="less">
// @import "../assets/less/index";
.page-header {
  background-color: #fff;
  box-shadow: 0 10px 60px 0 rgba(99,138,51, .07);
  opacity: 0.98;
  position: relative !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  transition: all 0.3s;
  z-index: 100;
  .header-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: space-between;

    a {
      color: #638a33;
    }
  }
}
</style>
<template>
  <header class="page-header" :style="$route.name === 'index' ? 'box-shadow:none' : 'box-shadow:0 10px 60px 0 rgba(64, 158, 255, .1)'">
    <div class="header-container">
      <router-link :to="{name: 'index'}"><img src="../assets/logo.png" width="70"></router-link>
      <router-link :to="{name: 'giud'}">组件</router-link>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
