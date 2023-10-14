<script setup>
import Button from '../components/Button.vue'
</script>
<template>
  <section class="my-14 lg:my-20">
    <div class="flex flex-col lg:flex-row">
      <div
        class="relative mb-5 flex flex-col items-center justify-center lg:mb-0 lg:ml-20 lg:w-1/2"
      >
        <!-- <span class="gradient absolute left-0 top-0 -z-50 h-full w-full"></span> -->
        <h1 class="mb-5 text-center text-3xl lg:text-5xl">تواصل معنا</h1>
        <p class="mb-5 text-center text-gray-500">
          نحن نتطلع لسماع أخباركم والاستماع إلى ما لديكم لتقولوه. لا تترددوا في التواصل معنا
        </p>
        <img src="@/assets/imgs/logo_alt.png" alt="logo" class="w-40 lg:w-96" />
      </div>

      <div class="pl-8 lg:w-1/2">
        <form action="">
          <div class="mb-5">
            <label for="">الأسم</label>
            <input type="text" class="mt-3 block w-full border bg-gray-100 p-1" />
          </div>
          <div class="mb-5">
            <label for="">البريد الألكتروني</label>
            <input type="text" class="mt-3 block w-full border bg-gray-100 p-1" />
          </div>
          <div class="mb-5">
            <label for="">عنوان الرسالة</label>
            <input type="text" class="mt-3 block w-full border bg-gray-100 p-1" />
          </div>
          <div class="mb-5">
            <label for="">الرسالة</label>
            <textarea cols="10" class="mt-3 block w-full border bg-gray-100 p-1" />
          </div>
          <Button class="px-8 py-2">أرسل</Button>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {}
</script>
<style scoped>
.gradient {
  background: linear-gradient(
    239deg,
    rgba(239, 239, 239, 0.59) 28.75%,
    rgba(239, 239, 239, 0) 76.96%
  );
  filter: blur(4.5px);
}
</style>
