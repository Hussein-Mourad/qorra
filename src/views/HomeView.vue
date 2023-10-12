<script setup>
import SearchInput from '../components/SearchInput.vue'
import HeroSection from '../components/HeroSection.vue'
import CategoriesSection from '../components/CategoriesSection.vue'
import LatestArticlesSection from '../components/LatestArticlesSection.vue'
</script>
<template>
  <section class="mb-5 lg:hidden">
    <SearchInput />
  </section>
  <HeroSection />
  <CategoriesSection />
  <LatestArticlesSection />
</template>
<script>
export default {}
</script>
<style lang=""></style>
