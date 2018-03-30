<template>
  <header class="v-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'VHeader',
  componentName: 'VHeader',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>

<style>

</style>
