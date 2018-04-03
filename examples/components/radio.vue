<template>
  <label>
    <input type="radio"
    :value="label"
    v-model="model"
    @change="handleChange"
  >
  </label>
</template>

<script>
export default {
  name: 'ss',
  props: {
    value: String,
    label: String
  },
  mounted () {
    console.log(this.value)
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        // console.log(this)
        this.$emit('input', val)
      }
    }
  },
  methods: {
    handleChange () {
      this.$nextTick(() => {
        console.log(this.model)
      })
    }
  }
}
</script>

<style>

</style>
