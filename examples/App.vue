<template>
  <div id="app">
    <img src="./assets/logo.png">
    <v-row :gutter='20' type='flex' justify='center'>
      <v-col :span='4'><div class="grid-content bg-purple"></div></v-col>
      <v-col :span='4'><div class="grid-content bg-purple-light"></div></v-col>
    </v-row>
    <v-container>
      <v-aside width="200px">Aside</v-aside>
      <v-main>Main</v-main>
    </v-container>
     <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .v-header, .v-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .v-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .v-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .v-container {
    margin-bottom: 40px;
  }

  .v-container:nth-child(5) .v-aside,
  .v-container:nth-child(6) .v-aside {
    line-height: 260px;
  }

  .v-container:nth-child(7) .v-aside {
    line-height: 320px;
  }
</style>
