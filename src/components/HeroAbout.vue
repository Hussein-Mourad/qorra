<script setup>
import TextWithLines from './TextWithLines.vue'
</script>
<template>
  <section class="my-14 lg:my-20">
    <div class="mb-8 flex flex-col items-center px-3 lg:flex-row lg:justify-around">
      <div class="mb-5 w-auto text-5xl md:text-7xl lg:mb-0 lg:text-8xl">
        <h1>لمحة عن</h1>
        <div class="mt-3 text-end">
          <TextWithLines text="قُرَّاءْ" />
        </div>
      </div>
      <div class="flex max-w-xl flex-col items-center text-gray-500">
        <img src="@/assets/imgs/logo_alt.png" alt="logo" class="w-32 lg:w-36" />
        <p>
          تقدم قُرَّاءْ تدريبات أكاديمية وتخصصية ومهارية لكل لجنة خاصة بوظيفتها. مثال: لجنة الإعلام
          يأخذ الشخص المُنضم حديثاً للجنة تدريبات في المجال الإعلامي، ولجنة الإعلام لها أقسام وهى: -
          التصميم - التسويق - التصوير - فحسب اختياره للقسم الذي يريد التدريب فيه يأخذ تدريبات
          أكاديمية، وعملية داخله، ليكون قادراً على تأدية المهام الخاصة بهذا القسم، وهكذا في باقي
          اللجان.
        </p>
      </div>
    </div>
    <div class="my-14 w-full">
      <img src="@/assets/imgs/hero-about.jpg" alt="team picture" class="w-full" />
    </div>
    <div class="flex justify-between">
      <div class="ml-5">
        <h1 class="mb-3 text-xl text-gray-800 lg:text-3xl">اهدفنا</h1>
        <p class="text-gray-500">
          تحقيق التنمية الثقافية واالجتماعية كجزء من التنمية المستدامة. ممارسة اللغة العربية الفصيحة
          من خالل ورش اللغة. لقاءات مع نماذج مشرفة وإبراز دورهم في المجتمع.
        </p>
      </div>
      <div>
        <h1 class="mb-3 text-xl text-gray-800 lg:text-3xl">رؤيتنا</h1>
        <p class="text-gray-500">
          نطمح إلى تشجيع ثقافة القراءة وإثراء المعرفة في المجتمع العربي. نسعى لأن نصبح المصدر
          الرئيسي والموجه لكل محبي القراءة في العالم العربي، ونسهم في بناء جيل قارئ مثقف ومبدع.
        </p>
      </div>
    </div>
  </section>
</template>
