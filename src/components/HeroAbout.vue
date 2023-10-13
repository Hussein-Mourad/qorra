<script setup>
import TextWithLines from './TextWithLines.vue'
</script>
<template>
  <section class="flex flex-col items-center px-3 py-5 lg:flex-row lg:justify-around">
    <div class="mb-5 w-auto text-5xl md:text-7xl lg:mb-0 lg:text-8xl">
      <h1>لمحة عن</h1>
      <div class="mt-3 text-end">
        <TextWithLines text="قُرَّاءْ" />
      </div>
    </div>
    <div class="flex max-w-xl flex-col items-center text-gray-500">
      <img src="@/assets/imgs/logo.png" alt="logo" class="w-32 lg:w-36" />
      <p>
        تقدم قُرَّاءْ تدريبات أكاديمية وتخصصية ومهارية لكل لجنة خاصة بوظيفتها. مثال: لجنة الإعلام
        يأخذ الشخص المُنضم حديثاً للجنة تدريبات في المجال الإعلامي، ولجنة الإعلام لها أقسام وهى: -
        التصميم - التسويق - التصوير - فحسب اختياره للقسم الذي يريد التدريب فيه يأخذ تدريبات
        أكاديمية، وعملية داخله، ليكون قادراً على تأدية المهام الخاصة بهذا القسم، وهكذا في باقي
        اللجان.
      </p>
    </div>
  </section>
</template>
