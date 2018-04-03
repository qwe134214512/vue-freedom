<template>
  <button
    class="v-button"
    @click="handleClick"
    :class="[
      type ? 'v-button--' + type : '',
      size ? 'v-button--' + size : '',
      {
        'is-plain': plain,
        'is-disabled': disabled,
        'is-loading': loading,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
  <i class="v-ico-loading" v-if="loading"></i>
  <i v-if="icon !==''" :class='icon'></i>
  <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style>

</style>
