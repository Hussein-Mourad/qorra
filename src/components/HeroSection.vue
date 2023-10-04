<script setup>
import Card from './Card.vue'
</script>
<template>
  <section class="py-5 lg:flex lg:flex-row-reverse">
    <Card
      classes="mb-5 lg:mr-14"
      :img="img1"
      altText="card img"
      title="فوائد القراءة اليومية"
      author="أحمد السيد"
      readingDuration=" 5 دقائق قراءة"
      date="2 فبراير"
    />
    <div class="flex lg:flex-col">
      <Card
        classes="ml-5 lg:ml-0 lg:mb-5"
        :img="img2"
        altText="card img"
        title="تعزيز التفكير النقدي من خلال القراءة"
        author="أحمد السيد"
        readingDuration=" 5 دقائق قراءة"
        date="2 فبراير"
      />
      <Card
        :img="img3"
        altText="card img"
        title="رحلة ممتعة لاكتشاف التراث"
        author="أحمد السيد"
        readingDuration=" 5 دقائق قراءة"
        date="2 فبراير"
      />
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      img1: '',
      img2: '',
      img3: ''
    }
  },
  mounted() {
    import('@/assets/imgs/card_img1.jpg').then((module) => {
      this.img1 = module.default
    })
    import('@/assets/imgs/card_img2.jpg').then((module) => {
      this.img2 = module.default
    })
    import('@/assets/imgs/card_img3.jpg').then((module) => {
      this.img3 = module.default
    })
  }
}
</script>
