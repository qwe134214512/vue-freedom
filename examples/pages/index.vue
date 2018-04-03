<template>
  <div class="pg-index">
    <div class="index-container">
      <img src="../assets/logo.png" width="300px">
      <p>一款轻量级、模块化的前端 UI 组件库</p>
      <span>(借鉴 Element-UI)</span>
    </div>
    <div class="separate-panel">
      <div class="about">
        <router-link :to="{name: 'giud'}">开始使用</router-link>
        <a target="_blank" class="btn-github" href="https://github.com/VV-UI/VV-UI">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      height: document.documentElement.clientHeight
    }
  }
}
</script>
<style>
.pg-index .index-container {
  width: 960px;
  margin: 0 auto;
  text-align: center;
  padding: 80px 0 90px;
}

.pg-index .index-container p {
  margin-top: 56px;
  margin-bottom: 12px;
  color: #8994c6;
  font-size: 32px;
}
.pg-index .index-container span {
  font-size: 14px;
  color: #409EFF;
}
.pg-index .separate-panel {
  position: relative;
}

.pg-index .separate-panel .about {
  position: absolute;
  width: 100%;
  height: 200px;
  top: 20px;
  z-index: 9;
  background: #fff;
  text-align: center;
}

.pg-index .separate-panel .about a {
  color: #fff;
  background-image: linear-gradient(90deg, #00aeff 0%, #3369e7 100%);
  box-shadow: 0 2px 6px 0 rgba(51, 105, 231, 0.4);
  display: inline-block;
  width: 190px;
  height: 56px;
  margin: 0 35px;
  font-size: 18px;
  line-height: 60px;
  vertical-align: middle;
  border-radius: 28px;
  transition: all 0.3s;
  text-decoration: none;
  cursor: pointer;
}

.pg-index .separate-panel .about .btn-github {
  color: #316de9;
  border: 1px solid #2f6ee9;
  background: #fff;
  box-shadow: none;
}

.pg-index .separate-panel:after {
  content: "";
  display: block;
  position: absolute;
  top: -70px;
  width: 100%;
  height: 250px;
  background: #fff;
  box-shadow: 0 -4px 30px 0 #dfe1e6;
  transform: skewY(-4deg);
}
</style>
