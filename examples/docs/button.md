# Button 按钮
---
常用的操作按钮。

### 基础用法
基础的按钮用法。
<div class='demo-block'>
  <v-row>
  <v-button>默认按钮</v-button>
  <v-button type="primary">主要按钮</v-button>
  <v-button type="success">成功按钮</v-button>
  <v-button type="info">信息按钮</v-button>
  <v-button type="warning">警告按钮</v-button>
  <v-button type="danger">危险按钮</v-button>
</v-row>

<v-row>
  <v-button plain>朴素按钮</v-button>
  <v-button type="primary" plain>主要按钮</v-button>
  <v-button type="success" plain>成功按钮</v-button>
  <v-button type="info" plain>信息按钮</v-button>
  <v-button type="warning" plain>警告按钮</v-button>
  <v-button type="danger" plain>危险按钮</v-button>
</v-row>

<v-row>
  <v-button round>圆角按钮</v-button>
  <v-button type="primary" round>主要按钮</v-button>
  <v-button type="success" round>成功按钮</v-button>
  <v-button type="info" round>信息按钮</v-button>
  <v-button type="warning" round>警告按钮</v-button>
  <v-button type="danger" round>危险按钮</v-button>
</v-row>

<v-row>
  <v-button icon="v-ico-search" circle></v-button>
  <v-button type="primary" icon="v-ico-edit" circle></v-button>
  <v-button type="success" icon="v-ico-check" circle></v-button>
   <v-button type="info" icon="v-ico-down" circle></v-button>
  <v-button type="warning" icon="v-ico-scan" circle></v-button>
  <v-button type="danger" icon="v-ico-delete" circle></v-button>
</v-row>
<style>
  .demo-block > .v-row:not(:last-child){
    margin-bottom: 20px;
  }
</style>
</div>

:::demo
```html
<v-row>
  <v-button>默认按钮</v-button>
  <v-button type="primary">主要按钮</v-button>
  <v-button type="success">成功按钮</v-button>
  <v-button type="info">信息按钮</v-button>
  <v-button type="warning">警告按钮</v-button>
  <v-button type="danger">危险按钮</v-button>
</v-row>

<v-row>
  <v-button plain>朴素按钮</v-button>
  <v-button type="primary" plain>主要按钮</v-button>
  <v-button type="success" plain>成功按钮</v-button>
  <v-button type="info" plain>信息按钮</v-button>
  <v-button type="warning" plain>警告按钮</v-button>
  <v-button type="danger" plain>危险按钮</v-button>
</v-row>

<v-row>
  <v-button round>圆角按钮</v-button>
  <v-button type="primary" round>主要按钮</v-button>
  <v-button type="success" round>成功按钮</v-button>
  <v-button type="info" round>信息按钮</v-button>
  <v-button type="warning" round>警告按钮</v-button>
  <v-button type="danger" round>危险按钮</v-button>
</v-row>

<v-row>
  <v-button icon="v-ico-search" circle></v-button>
  <v-button type="primary" icon="v-ico-link" circle></v-button>
  <v-button type="success" icon="v-ico-check" circle></v-button>
  <v-button type="info" icon="v-ico-down" circle></v-button>
  <v-button type="warning" icon="v-ico-scan" circle></v-button>
  <v-button type="danger" icon="v-ico-delete" circle></v-button>
</v-row>
```
:::

### 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

<div class='demo-block'>
  <v-button type="primary" icon="v-ico-edit"></v-button>
  <v-button type="primary" icon="v-ico-share"></v-button>
  <v-button type="primary" icon="v-ico-delete"></v-button>
  <v-button type="primary" icon="v-ico-search">搜索</v-button>
</div>

:::demo
```html
  <v-button type="primary" icon="v-ico-edit"></v-button>
  <v-button type="primary" icon="v-ico-share"></v-button>
  <v-button type="primary" icon="v-ico-delete"></v-button>
  <v-button type="primary" icon="v-ico-search">搜索</v-button>
```
:::


### 加载中
点击按钮后进行数据加载操作，在按钮上显示加载状态。

<div class='demo-block'>
  <v-button type="primary" loading>加载中</v-button>
</div>


:::demo
```html
  <v-button type="primary" loading>加载中</v-button>
```
:::
