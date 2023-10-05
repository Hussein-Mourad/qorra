<template>
  <div :class="['relative inline-block h-12 w-24 overflow-hidden lg:h-20 lg:w-52', classes]">
    <img class="block h-auto max-w-full object-cover" :src="img" :alt="alt" />
    <div class="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/50">
      <p class="items-center text-xl font-bold text-white">{{ text }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
    img: String,
    alt: String,
    classes: String
  }
}
</script>
