<template>
  <div id="app">
    <mainHeader></mainHeader>
    <v-container class="container" v-if="!isIndex">
      <sideNav class="nav"></sideNav>
      <router-view class="view"></router-view>
    </v-container>
    <router-view class="page" v-if="isIndex"></router-view>
    <!-- <img src="./assets/logo.png">
    <v-row :gutter='20' type='flex' justify='center'>
      <v-col :span='4'><div class="grid-content bg-purple"></div></v-col>
      <v-col :span='4'><div class="grid-content bg-purple-light"></div></v-col>
    </v-row>
    <v-container>
      <v-aside width="200px">Aside</v-aside>
      <v-main>Main</v-main>
    </v-container>
    <v-button type='warning' loading>我是</v-button>
      <v-button>默认按钮</v-button>
      <v-button type="primary">主要按钮</v-button>
      <v-button type="success">成功按钮</v-button>
      <v-button type="info">信息按钮</v-button>
      <v-button type="warning">警告按钮</v-button>
      <v-button type="danger">危险按钮</v-button>
      <v-row>
        <v-button plain>朴素按钮</v-button>
        <v-button type="primary" icon="v-ico-edit">NIHAO </v-button>
        <v-button type="success" circle>成功按钮</v-button>
        <v-button type="info" plain>信息按钮</v-button>
        <v-button type="warning" plain>警告按钮</v-button>
        <v-button type="danger" plain>危险按钮</v-button>
      </v-row>
    <v-row>
      <v-button-group>
        <v-button type="primary">上一页</v-button>
        <v-button type="primary">下一页</v-button>
      </v-button-group>

    </v-row>
    <input type="radio" value='sss' v-model='pri'>
    <radio v-model="pri" label='1' ></radio>
    <v-radio v-model="pri" label='10'>ss</v-radio> -->
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
* {
  font-family: Consolas, Menlo, Courier, monospace;
}
.container {
  margin: 48px auto;
  width: 90%;
  background-color: #fff;
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
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
</style>
