<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="flex w-full">
    <div class="ml-3 w-1/2 sm:ml-5 md:ml-10">
      <img class="w-full" src="@/assets/imgs/card_img1.jpg" :alt="altText" />
    </div>

    <div class="w-1/2">
      <div class="mb-0 flex items-center text-[10px] text-[#383838] md:mb-2 md:text-base">
        <span class="ml-1 h-px w-2 border-b border-gray-300 md:ml-2 md:w-3 lg:w-4"></span>
        <span class="ml-1">كتب بواسطة : </span>
        <h2>أحمد السيد</h2>
      </div>

      <div class="">
        <div class="mb-1 sm:text-lg md:mb-3 lg:text-2xl"><h1>فوائد القراءة اليومية</h1></div>
        <div class="mb-0 text-[10px] sm:text-base md:mb-3">
          <div class="">
            القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير
            كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة
            اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا.
          </div>
          <RouterLink class="text-blue-500" to="/">أقرأ المزيد</RouterLink>
        </div>
        <div class="justify-between text-[10px] text-[#383838] md:text-base">
          <div class="flex">
            <h2>2 فبراير</h2>
            <span class="mx-1">.</span>
            <h2>5 دقائق قراءة</h2>
          </div>
        </div>
      </div>
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
    readingDuration: String
  }
}
</script>
