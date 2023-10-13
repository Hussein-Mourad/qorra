<script setup>
import SearchInput from '../components/SearchInput.vue'
import HeroSection from '../components/HeroSection.vue'
import CategoriesSection from '../components/CategoriesSection.vue'
import LatestArticlesSection from '../components/LatestArticlesSection.vue'
import MostReadSection from '../components/MostReadSection.vue'
import HomeForm from '../components/HomeForm.vue'
</script>
<template>
  <main>
    <section class="mb-5 lg:hidden">
      <SearchInput />
    </section>
    <HeroSection />
    <CategoriesSection />
    <LatestArticlesSection />
    <MostReadSection />
    <HomeForm />
    <hr class="my-8" />
  </main>
</template>
<script>
export default {}
</script>
<style lang=""></style>
