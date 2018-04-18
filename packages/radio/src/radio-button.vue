<template>
  <label class="v-radio-button"
    :class="[
      { 'is-disabled': disabled },
      { 'is-active': value === label }
    ]"
  >
  <input type="radio" class="v-radio-button__input">
  <span></span>
  </label>
</template>

<script>
export default {
  
}
</script>

<style>

</style>
