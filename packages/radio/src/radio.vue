<template>
  <label
    class="v-radio"
    :class="[
      border && size ? 'v-radio--' + size : '',
      { 'is-disabled': disabled },
      { 'is-focus': focus },
      { 'is-borderd': border },
      { 'is-checked': model === label }
    ]"
  >
  <span class="v-radio__input"
    :class="{
      'is-disabled': disabled,
      'is-checked': model === label
    }"
  >
  <span class="v-radio__inner"></span>
  <input
    class="v-radio__original"
    :disabled="disabled"
    :value="label"
    v-model="model"
    type="radio"
  >
  </span>
   <span class="v-radio__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'VRadio',
  componentName: 'VRadio',
  data () {
    return {
      focus: false
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,

  }
}
</script>

<style>

</style>
