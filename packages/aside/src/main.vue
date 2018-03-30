<template>
  <aside class="v-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'VAside',
    componentName: 'VAside',
    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  }
</script>

