<script setup>
import TextWithLines from './TextWithLines.vue'
</script>
<template>
  <section class="mb-20 mt-14 lg:mb-32 lg:mt-20">
    <div class="my-8 text-center lg:my-12">
      <TextWithLines preText="فريق" text="العمل" />
    </div>
    <div class="flex justify-between">
      <div class="ml-5">
        <img class="w-full" src="@/assets/imgs/person1.png" alt="person1" />
        <h1 class="lg:text-lg">م. محمد علاء</h1>
        <h2 class="text-xs text-gray-500 lg:text-sm">رئيس المبادرة لسنة 2023</h2>
      </div>
      <div class="ml-5">
        <img class="w-full" src="@/assets/imgs/person2.png" alt="person2" />
        <h1 class="lg:text-lg">م. خالد حسن</h1>
        <h2 class="text-xs text-gray-500 lg:text-sm">منسق بلجنة الإعلام لسنة 2023</h2>
      </div>
      <div class="ml-5">
        <img class="w-full" src="@/assets/imgs/person3.png" alt="person3" />
        <h1 class="lg:text-lg">أ. سيف الدين سامر</h1>
        <h2 class="text-xs text-gray-500 lg:text-sm">مستشار لجنة الإعلام لسنة 2023</h2>
      </div>
      <div>
        <img class="w-full" src="@/assets/imgs/person4.png" alt="person4" />
        <h1 class="lg:text-lg">م. يوسف التركي</h1>
        <h2 class="text-xs text-gray-500 lg:text-sm">
          رئيس التقييم بلجنة التقييم والتطوير لسنة 2023
        </h2>
      </div>
    </div>
  </section>
</template>
