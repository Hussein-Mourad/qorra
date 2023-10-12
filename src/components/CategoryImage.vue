<template>
  <div :class="['relative inline-block h-12 w-24 overflow-hidden md:h-20 md:w-52', classes]">
    <img class="block h-auto max-w-full object-cover" :src="img" :alt="alt" />
    <div class="absolute inset-0 grid w-full place-items-center bg-black/50">
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
