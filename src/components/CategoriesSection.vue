<script setup>
import CategoryCarousel from './CategoryCarousel.vue'
import TextWithLines from './TextWithLines.vue'
</script>
<template>
  <section class="py-5">
    <div class="py-8 text-center">
      <TextWithLines text="الأقسام" />
    </div>
    <CategoryCarousel />
  </section>
  <section></section>
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
