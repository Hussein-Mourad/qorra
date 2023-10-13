<script setup>
import Button from './Button.vue'
</script>

<template>
  <section class="py-5">
    <div class="flex flex-col items-center">
      <h1 class="lg:text:5xl bold mb-8 box-border inline-block w-96 text-center text-3xl">
        اشترك ليصلك جميع المقالات
      </h1>
      <p class="mb-8 box-border inline-block w-96 text-center text-gray-500 lg:text-lg">
        ابقي علي اطلاع مع مقالتنا فور نزولها مع خدمة الرسائل البريدية هذه الخدمة مجانية تماماً
      </p>
    </div>
    <form action="">
      <div class="flex justify-center">
        <Button class="ml-1 px-6 py-2">أشترك</Button>
        <input class="border px-3 py-2" type="text" placeholder="البريد الإلكتروني" />
      </div>
    </form>
  </section>
</template>
