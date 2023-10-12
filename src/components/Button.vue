<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    @click="onClick()"
    :class="['rounded-sm bg-primary text-white', classes]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    classes: String,
    disabled: Boolean
  },
  methods: {
    onClick() {
      this.$emit('btn-click')
    }
  }
}
</script>
