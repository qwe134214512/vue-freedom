
<template>
  <footer class="v-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'VFooter',
    componentName: 'VFooter',
    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
