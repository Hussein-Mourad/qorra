<template>
  <footer class="px-4 py-6">
    <div class="items-center justify-around lg:flex">
      <div class="mb-10 flex flex-col items-center justify-center">
        <div class="mb-4">
          <img class="max-w-[180px]" src="@/assets/imgs/logo_alt.png" alt="qorra logo" />
        </div>
        <div class="flex w-full max-w-[180px] items-center justify-between">
          <div>
            <RouterLink to="/"
              ><img src="@/assets/imgs/youtube_blue.svg" alt="youtube logo"
            /></RouterLink>
          </div>
          <div>
            <RouterLink to="/"
              ><img src="@/assets/imgs/linkedin_blue.svg" alt="linkedin logo"
            /></RouterLink>
          </div>
          <div>
            <RouterLink to="/"
              ><img src="@/assets/imgs/instagram_blue.svg" alt="instagram logo"
            /></RouterLink>
          </div>
          <div>
            <RouterLink to="/"
              ><img src="@/assets/imgs/twitter_blue.svg" alt="twitter logo"
            /></RouterLink>
          </div>
          <div>
            <RouterLink to="/"
              ><img src="@/assets/imgs/facebook_blue.svg" alt="facebook logo"
            /></RouterLink>
          </div>
        </div>
      </div>

      <div class="mb-10 lg:mb-0">
        <h1 class="mb-4 font-bold lg:mb-6 lg:text-xl">من نحن</h1>
        <div class="mb-4 lg:text-lg"><RouterLink to="">الرؤية والرسالة والأهداف</RouterLink></div>
        <div class="mb-4 lg:text-lg"><RouterLink to="">أعضاء الإدارة التنفيذية</RouterLink></div>
        <div class="mb-4 lg:text-lg">
          <RouterLink to="">شكل المبادرة وما تقدمه للمجتمع</RouterLink>
        </div>
      </div>

      <div class="mb-10 lg:mb-0">
        <h1 class="mb-4 font-bold lg:mb-6 lg:text-xl">الوائح والسياسات</h1>
        <div class="mb-4 lg:text-lg"><RouterLink to="">اللائحة الأساسية</RouterLink></div>
        <div class="mb-4 lg:text-lg"><RouterLink to="">اللائحة التنظيمية</RouterLink></div>
        <div class="mb-4 lg:text-lg"><RouterLink to="">سياسة خصوصية البيانات</RouterLink></div>
      </div>

      <div class="mb-5 lg:mb-0">
        <h1 class="mb-4 font-bold lg:mb-6 lg:text-xl">المركز الإعلامي</h1>
        <div class="mb-4 lg:text-lg"><RouterLink to="">اللقاءات التليفزيونية</RouterLink></div>
        <div class="mb-4 lg:text-lg"><RouterLink to="">الصور</RouterLink></div>
        <div class="mb-4 lg:text-lg"><RouterLink to="">الأخبار</RouterLink></div>
      </div>
    </div>

    <div class="hidden items-center lg:flex">
      <div class="mx-10 mt-1 w-full border-b border-[#D9DBE9]"></div>
      <div class="w-full text-center text-lg">قُرَّاءْ &copy; جميع الحقوق محفوظة</div>
      <div class="mx-10 mt-1 w-full border-b border-[#D9DBE9]"></div>
    </div>
  </footer>
</template>
<script>
export default {}
</script>
<style lang=""></style>
