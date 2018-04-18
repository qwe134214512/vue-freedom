# Radio 单选框
---
在一组备选项中进行单选

### 基础用法
由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

<div class='demo-block'>
  <v-radio v-model="radio" label="1">备选项</v-radio>
  <v-radio v-model="radio" label="2">备选项</v-radio>

  <script>
  export default {
    data () {
      return {
        radio: '1'
      }
    }
  }
</script>
</div>

:::demo
```html
<v-radio v-model="radio" label="1">备选项</v-radio>
<v-radio v-model="radio" label="2">备选项</v-radio>

<script>
  export default {
    data () {
      return {
        radio: '1'
      }
    }
  }
</script>
```
:::


### 禁用状态
单选框不可用的状态。

<div class='demo-block'>
  <v-radio v-model="radio" label="1" disabled>备选项</v-radio>
  <v-radio v-model="radio" label="2" disabled>备选项</v-radio>

  <script>
  export default {
    data () {
      return {
        radio: '1'
      }
    }
  }
</script>
</div>

:::demo
```html
<v-radio v-model="radio" label="1" disabled>备选项</v-radio>
<v-radio v-model="radio" label="2" disabled>备选项</v-radio>

<script>
  export default {
    data () {
      return {
        radio: '1'
      }
    }
  }
</script>
```
:::


### 单选框组
适用于在多个互斥的选项中选择的场景

<div class='demo-block'>
  <v-radio-group v-model='radio'>
   <v-radio label="1" >备选项</v-radio>
   <v-radio label="2" >备选项</v-radio>
   <v-radio label="3" >备选项</v-radio>
  </v-radio-group>
  <script>
  export default {
    data () {
      return {
        radio: '1'
      }
    }
  }
</script>
</div>

:::demo
```html
<v-radio-group v-model='radio'>
  <v-radio label="1" >备选项</v-radio>
  <v-radio label="2" >备选项</v-radio>
  <v-radio label="3" >备选项</v-radio>
</v-radio-group>
<script>
export default {
  data () {
    return {
      radio: '1'
    }
  }
}
</script>
```
:::
