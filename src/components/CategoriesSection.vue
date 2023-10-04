<script setup>
import CategoryImage from './CategoryImage.vue'
</script>
<template>
  <section class="py-5">
    <div class="mb-8 grid w-full place-items-center">
      <h1 class="cateogry_title relative">
        <div class="absolute -bottom-[6px] left-8 -z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="49"
            height="44"
            viewBox="0 0 49 44"
            fill="none"
          >
            <path
              d="M5.74298 43L47.743 0.999999"
              stroke="#FECE2F"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M1 30.6968L23.68 8.01678"
              stroke="#FECE2F"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div class="">الأقسام</div>
      </h1>
    </div>
    <div class="flex w-full gap-5">
      <button><img src="@/assets/imgs/big_arrow_right.svg" alt="right arrow" /></button>
      <CategoryImage :img="pyramids_img" alt="Al Adab img" text="تاريخ" />
      <CategoryImage :img="adab_img" alt="Al Adab img" text="أدب" />
      <CategoryImage :img="shaer_img" alt="Al Adab img" text="شعر" />
      <CategoryImage :img="fnon_img" alt="fnon img" text="فنون" />
      <CategoryImage :img="falsafa_img" alt="falsafa img" text="فلسفة" />
      <button><img src="@/assets/imgs/big_arrow_left.svg" alt="left arrow" /></button>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      adab_img: '',
      falsafa_img: '',
      fnon_img: '',
      pyramids_img: '',
      shaer_img: ''
    }
  },
  mounted() {
    import('@/assets/imgs/al_adab.jpg').then((module) => {
      this.adab_img = module.default
    })
    import('@/assets/imgs/falsafa.jpg').then((module) => {
      this.falsafa_img = module.default
    })
    import('@/assets/imgs/fnon.jpg').then((module) => {
      this.fnon_img = module.default
    })
    import('@/assets/imgs/pyramids.jpg').then((module) => {
      this.pyramids_img = module.default
    })
    import('@/assets/imgs/shaer.jpg').then((module) => {
      this.shaer_img = module.default
    })
  }
}
</script>

<style scoped>
.cateogry_title {
  font-family: Cairo;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(94deg, #5367ff 16.43%, #e553ff 113.38%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
