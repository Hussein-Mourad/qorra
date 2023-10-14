<script setup>
import TextWithLines from './TextWithLines.vue'
</script>
<template>
  <section class="my-14 lg:my-20">
    <div class="my-8 text-center lg:my-12">
      <TextWithLines preText="شركاء" text="النجاح" />
    </div>
    <div class="flex justify-around">
      <div class="ml-5 flex w-full max-w-[100px] items-center justify-center">
        <img class="w-full grayscale" src="@/assets/imgs/alex-uni.png" alt="alex uni" />
      </div>
      <div class="ml-5 flex w-full max-w-[100px] items-center justify-center">
        <img class="w-full grayscale" src="@/assets/imgs/midraj.png" alt="midraj" />
      </div>
      <div class="ml-5 flex w-full max-w-[100px] items-center justify-center">
        <img class="w-full grayscale" src="@/assets/imgs/mezza.png" alt="mezza" />
      </div>
      <div class="flex w-full max-w-[100px] items-center justify-center">
        <img class="w-full grayscale" src="@/assets/imgs/arabisk.png" alt="arabisk" />
      </div>
    </div>
  </section>
</template>
