<script setup>
import TextWithLines from './TextWithLines.vue'
import CardDetails from './CardDetails.vue'
</script>

<template>
  <section class="py-5">
    <div class="flex justify-between py-5">
      <h1>
        <span class="ml-2 text-5xl">أحدث</span>
        <TextWithLines text="المقالات" />
      </h1>
      <button><a href="" class="text-primary">عرض الجميع</a></button>
    </div>
    <div class="space-y-5">
      <CardDetails
        :img="img1"
        altText="card img"
        title="فوائد القراءة اليومية"
        author="أحمد السيد"
        readingDuration=" 5 دقائق قراءة"
        date="2 فبراير"
        content="القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا."
      />
      <CardDetails
        :img="img2"
        altText="card img"
        title="رحلة ممتعة لاكتشاف التراث"
        author="أحمد السيد"
        readingDuration=" 5 دقائق قراءة"
        date="2 فبراير"
        content="القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا."
      />
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      img1: '',
      img2: ''
    }
  },
  mounted() {
    import('@/assets/imgs/card_img1.jpg').then((module) => {
      this.img1 = module.default
    })
    import('@/assets/imgs/card_img4.jpg').then((module) => {
      this.img2 = module.default
    })
  }
}
</script>
