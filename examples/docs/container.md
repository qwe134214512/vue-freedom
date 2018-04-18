# Container 布局容器
---

用于布局的容器组件，方便快速搭建页面的基本结构：

```<v-container>```：外层容器。当子元素中包含 ```<v-header>``` 或 ```<v-footer>``` 时，全部子元素会垂直上下排列，否则会水平左右排列。

```<v-header>```：顶栏容器。

```<v-aside>```：侧边栏容器。

```<v-main>```：主要区域容器。

```<v-footer>```：底栏容器。

<div class="demo-block">
<v-container>
  <v-header>Header</v-header>
  <v-main>Main</v-main>
</v-container>

<v-container>
  <v-header>Header</v-header>
  <v-main>Main</v-main>
  <v-footer>Footer</v-footer>
</v-container>

<v-container>
  <v-aside width="200px">Aside</v-aside>
  <v-main>Main</v-main>
</v-container>

<v-container>
  <v-header>Header</v-header>
  <v-container>
    <v-aside width="200px">Aside</v-aside>
    <v-main>Main</v-main>
  </v-container>
</v-container>

<v-container>
  <v-header>Header</v-header>
  <v-container>
    <v-aside width="200px">Aside</v-aside>
    <v-container>
      <v-main>Main</v-main>
      <v-footer>Footer</v-footer>
    </v-container>
  </v-container>
</v-container>

<v-container>
  <v-aside width="200px">Aside</v-aside>
  <v-container>
    <v-header>Header</v-header>
    <v-main>Main</v-main>
  </v-container>
</v-container>

<v-container>
  <v-aside width="200px">Aside</v-aside>
  <v-container>
    <v-header>Header</v-header>
    <v-main>Main</v-main>
    <v-footer>Footer</v-footer>
  </v-container>
</v-container>

<style>
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

  .demo-block > .v-container {
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
</div>

:::demo
```html
<v-container>
  <v-header>Header</v-header>
  <v-main>Main</v-main>
</v-container>

<v-container>
  <v-header>Header</v-header>
  <v-main>Main</v-main>
  <v-footer>Footer</v-footer>
</v-container>

<v-container>
  <v-aside width="200px">Aside</v-aside>
  <v-main>Main</v-main>
</v-container>

<v-container>
  <v-header>Header</v-header>
  <v-container>
    <v-aside width="200px">Aside</v-aside>
    <v-main>Main</v-main>
  </v-container>
</v-container>

<v-container>
  <v-header>Header</v-header>
  <v-container>
    <v-aside width="200px">Aside</v-aside>
    <v-container>
      <v-main>Main</v-main>
      <v-footer>Footer</v-footer>
    </v-container>
  </v-container>
</v-container>

<v-container>
  <v-aside width="200px">Aside</v-aside>
  <v-container>
    <v-header>Header</v-header>
    <v-main>Main</v-main>
  </v-container>
</v-container>

<v-container>
  <v-aside width="200px">Aside</v-aside>
  <v-container>
    <v-header>Header</v-header>
    <v-main>Main</v-main>
    <v-footer>Footer</v-footer>
  </v-container>
</v-container>

<style>
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
```
:::
