<script setup>
import TextWithLines from './TextWithLines.vue'
import Card from './Card.vue'
</script>

<template>
  <section class="py-10">
    <div class="flex justify-between py-5">
      <TextWithLines preText="الأكثر" text="قراءة" />
      <button><a href="" class="text-primary">عرض الجميع</a></button>
    </div>
    <div class="flex justify-between">
      <div class="ml-5">
        <Card
          :img="img1"
          altText="card img"
          title="فوائد القراءة اليومية"
          author="أحمد السيد"
          readingDuration=" 5 دقائق قراءة"
          date="2 فبراير"
          content="القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا."
        />
      </div>
      <div class="ml-5">
        <Card
          :img="img1"
          altText="card img"
          title="فوائد القراءة اليومية"
          author="أحمد السيد"
          readingDuration=" 5 دقائق قراءة"
          date="2 فبراير"
          content="القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا."
        />
      </div>
      <div class="ml-5">
        <Card
          :img="img1"
          altText="card img"
          title="فوائد القراءة اليومية"
          author="أحمد السيد"
          readingDuration=" 5 دقائق قراءة"
          date="2 فبراير"
          content="القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا."
        />
      </div>
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
