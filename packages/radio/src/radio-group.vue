<template>
  <div class="v-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VRadioGroup',
  componentName: 'VRadioGroup',

  props: {
    value: {},
    disabled: Boolean
  },

  created () {
    this.$on('handleChange', value => {
      this.$emit('change', value)
    })
  }
}
</script>

<style>

</style>
