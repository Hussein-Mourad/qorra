<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full">
    <div><img class="w-full" src="@/assets/imgs/card_img1.jpg" :alt="altText" /></div>
    <div class="my-2 flex justify-between text-xs text-[#383838] md:text-base">
      <div class="flex">
        <h2>2 فبراير</h2>
        <span class="mx-1">.</span>
        <h2>5 دقائق قراءة</h2>
      </div>
      <div class="flex">
        <span class="ml-1">كتب بواسطة : </span>
        <h2>أحمد السيد</h2>
      </div>
    </div>
    <div class="sm:text-lg lg:text-2xl"><h1>فوائد القراءة اليومية</h1></div>
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
    readingDuration: String
  }
}
</script>
