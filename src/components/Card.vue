<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div :class="['w-full', classes]">
    <div class="w-full"><img class="w-full" :src="img" :alt="altText" /></div>
    <div class="my-2 flex justify-between text-xs text-[#383838] md:text-base">
      <div class="flex">
        <h2>{{ date }}</h2>
        <span class="mx-1">.</span>
        <h2>{{ readingDuration }}</h2>
      </div>
      <div class="flex">
        <span class="ml-1">كتب بواسطة : </span>
        <h2>{{ author }}</h2>
      </div>
    </div>
    <div class="sm:text-lg lg:text-2xl">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    img: String,
    altText: String,
    title: String,
    date: String,
    author: String,
    readingDuration: String,
    classes: String
  }
}
</script>
