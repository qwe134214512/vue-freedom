<style lang="less" type="text/less">
  * {
    text-decoration: none;
  }
  .side-nav {
    display: inline-block;
    margin: 32px 0;
    padding: 0;
    color: #3F536E;
    background-color: #fff;
    border-right: 1px solid #ECECEC;
    z-index: 99;
    .group-container{
      margin-bottom: 32px;
    }
    .side-nav-title{
      padding: 0 24px 8px;
      color: #638a33;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .side-nav-items{
      font-size: 14px;
      font-weight: normal;
      line-height: 1.8;
      a{
        display: block;
        position: relative;
        padding: 8px 24px;
        color: #3F536E;
        font-weight: normal;
        line-height: 1.5;
        cursor: pointer;

        &:hover {
          background: rgba(99,138,51,.05)
        }
      }
      .side-nav-group{
        display: block;
        position: relative;
        padding: 6px 0 6px 24px;
        color: #2C405A;
        font-weight: bold;
      }
      .slid-nav-component{
        display: block;
        position: relative;
        padding: 6px 24px 6px 32px;
        color: #616367;
        font-size: 15px;

        span {
          padding-left: 6px;
          font-size: 12px;
          opacity: 0.6;
        }
      }
      .active{
        color: #97c625;
        border-left: 3px solid #97c625;
      }
    }
  }
</style>
<template>
  <div class="side-nav">
    <div v-for="(title, index) in (Object.keys(data))" :key="index" class="group-container">
      <p class="side-nav-title">{{title}}</p>
      <div class="side-nav-items" v-for="(nav, index) in data[title]" :key="index" v-if="nav.desc">
        <router-link :class="$route.name===nav.name ? 'active' : ''" v-if="nav.name" :to="{name: nav.name}">{{nav.desc}}</router-link>
        <p v-else class="side-nav-group">{{nav.desc}}</p>
        <div v-for="(item, index) in nav.items" :key="index">
          <router-link :to="{name: item.name}" :class="$route.name===item.name ? 'active' : ''" class="slid-nav-component">{{item.txt}}
            <span>{{item.desc}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navConf from '../nav.config.json'
export default {
  data () {
    return {
      data: navConf
    }
  }
}
</script>
