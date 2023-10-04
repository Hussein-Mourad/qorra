<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <main class="px-4 py-6 lg:px-6">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped></style>
