<template>
  <swiper
    :dir="rtl"
    :modules="modules"
    :slides-per-view="5"
    :space-between="20"
    :navigation="{
      nextEl: '#button-next',
      prev: '#button-prev'
    }"
    :per="onSwiper"
    :breakpoints="{
      '@0.00': {
        slidesPerView: 4,
        spaceBetween: 10
      },
      '@1.00': {
        slidesPerView: 4,
        spaceBetween: 40
      },
      '@1.50': {
        slidesPerView: 5,
        spaceBetween: 50
      }
    }"
    @slideChange="onSlideChange"
  >
    <div id="button-next" class="swiper-button-next"></div>
    <div id="button-prev" class="swiper-button-prev"></div>
    <swiper-slide
      ><CategoryImage :img="pyramids_img" alt="Al Adab img" text="تاريخ" />
    </swiper-slide>
    <swiper-slide>
      <CategoryImage :img="adab_img" alt="Al Adab img" text="أدب" />
    </swiper-slide>
    <swiper-slide>
      <CategoryImage :img="shaer_img" alt="Al Adab img" text="شعر" />
    </swiper-slide>
    <swiper-slide>
      <CategoryImage :img="fnon_img" alt="fnon img" text="فنون" />
    </swiper-slide>
    <swiper-slide>
      <CategoryImage :img="falsafa_img" alt="falsafa img" text="فلسفة" />
    </swiper-slide>
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation } from 'swiper/modules'
import CategoryImage from './CategoryImage.vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
    CategoryImage
  },
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
  },
  setup() {
    const swiper = useSwiper()
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      swiper,
      onSwiper,
      onSlideChange,
      modules: [Navigation]
    }
  }
}
</script>
<style scoped>
.swiper-button-next {
  background-image: url(../assets/imgs/big_arrow_left.svg);
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;
}

.swiper-button-next::after {
  display: none;
}
.swiper-button-prev {
  background-image: url(../assets/imgs/big_arrow_right.svg);
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;
}

.swiper-button-prev::after {
  display: none;
}
</style>
