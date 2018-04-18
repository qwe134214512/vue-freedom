# Layout 布局
通过基础的 24 分栏，迅速简便地创建布局。

### 基础布局
使用单一分栏创建基础的栅格布局。
<div class="demo-block">
<v-row>
  <v-col :span="24"><div class="grid-content bg-purple-dark"></div></v-col>
</v-row>
<v-row>
  <v-col :span="12"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="12"><div class="grid-content bg-purple-light"></div></v-col>
</v-row>
<v-row>
  <v-col :span="8"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="8"><div class="grid-content bg-purple-light"></div></v-col>
  <v-col :span="8"><div class="grid-content bg-purple"></div></v-col>
</v-row>
<v-row>
  <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="6"><div class="grid-content bg-purple-light"></div></v-col>
  <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="6"><div class="grid-content bg-purple-light"></div></v-col>
</v-row>
<v-row>
  <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="4"><div class="grid-content bg-purple-light"></div></v-col>
  <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="4"><div class="grid-content bg-purple-light"></div></v-col>
  <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="4"><div class="grid-content bg-purple-light"></div></v-col>
</v-row>

</div>

::: demo
```html
<v-row>
  <v-col :span="24"><div class="grid-content bg-purple-dark"></div></v-col>
</v-row>
<v-row>
  <v-col :span="12"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="12"><div class="grid-content bg-purple-light"></div></v-col>
</v-row>
<v-row>
  <v-col :span="8"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="8"><div class="grid-content bg-purple-light"></div></v-col>
  <v-col :span="8"><div class="grid-content bg-purple"></div></v-col>
</v-row>
<v-row>
  <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="6"><div class="grid-content bg-purple-light"></div></v-col>
  <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="6"><div class="grid-content bg-purple-light"></div></v-col>
</v-row>
<v-row>
  <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="4"><div class="grid-content bg-purple-light"></div></v-col>
  <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="4"><div class="grid-content bg-purple-light"></div></v-col>
  <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="4"><div class="grid-content bg-purple-light"></div></v-col>
</v-row>

<style>
  .v-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .v-col {
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
</style>
```
:::

### 分栏间隔
分栏之间存在间隔
<div class="demo-block">
<v-row :gutter="20">
  <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
</v-row>
<style>
  .v-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .v-col {
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
</style>
</div>

:::demo
```html
<v-row :gutter="20">
  <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="6"><div class="grid-content bg-purple"></div></v-col>
</v-row>
<style>
  .v-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .v-col {
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
</style>
```
:::


### 混合布局
通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。
<div class="demo-block">
<v-row :gutter="20">
  <v-col :span="16"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="8"><div class="grid-content bg-purple"></div></v-col>
</v-row>
<v-row :gutter="20">
  <v-col :span="8"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="8"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
</v-row>
<v-row :gutter="20">
  <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="16"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
</v-row>
</div>

:::demo
```html
<v-row :gutter="20">
  <v-col :span="16"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="8"><div class="grid-content bg-purple"></div></v-col>
</v-row>
<v-row :gutter="20">
  <v-col :span="8"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="8"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
</v-row>
<v-row :gutter="20">
  <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="16"><div class="grid-content bg-purple"></div></v-col>
  <v-col :span="4"><div class="grid-content bg-purple"></div></v-col>
</v-row>

<style>
  .v-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .v-col {
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
</style>
```
:::
