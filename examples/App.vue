<template>
  <div id="app">
    <mainHeader></mainHeader>
    <v-container class="container" v-if="!isIndex">
      <sideNav class="nav"></sideNav>
        <transition name="fade" mode="out-in">
          <router-view class="view"></router-view>
        </transition>
    </v-container>
    <router-view class="page" v-if="isIndex"></router-view>
  </div>
</template>

<script>
import mainHeader from './components/header'
import sideNav from './components/side-nav'
import radio from './components/radio'
export default {
  name: 'App',
  components: {
    mainHeader,
    sideNav,
    radio
  },
  data () {
    return {
      isIndex: true
    }
  },
  watch: {
    $route () {
      this.isIndex = this.$route.name === 'index'
    }
  }
}
</script>

<style lang="less" type="text/less">
@import './assets/less/index.less';
// * {
//   font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
// }
.container {
  margin: 48px auto;
  width: 90%;
  background-color: #fff;
  box-shadow: 0 1px 30px 0 rgba(99,138,51,.3);
  .nav {
    float: left;
    width: 210px;
  }
  .view {
    float: left;
    width: calc(~"100% - 215px");
    padding: 32px 48px 48px;
    box-sizing: border-box;
  }
}
.container:after {
  content: "";
  clear: both;
  display: block;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
