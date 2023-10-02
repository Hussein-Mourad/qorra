<script setup>
import Button from './Button.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="px-6 py-5 shadow-sm">
    <div class="flex items-center justify-between">
      <button @click="toggleMenu()">
        <img src="@/assets/imgs/mobile_burger_menu.svg" alt="burger menu" />
      </button>
      <div></div>
      <!-- <form action=""></form>
    <div class="flex w-96 items-center justify-between">
      <h1>الرئيسية</h1>
      <h1>من نحن</h1>
      <h1>راسلنا</h1>
    </div> -->
      <RouterLink to="/">
        <div class="h-9 w-10">
          <img src="@/assets/imgs/logo.png" alt="Qorra logo" />
        </div>
      </RouterLink>
    </div>
    <div :class="[{ hidden: !showMenu }, 'py-10 text-xl']">
      <ul>
        <li class="pb-11">الرئيسية</li>
        <li class="pb-11">من نحن</li>
        <li class="pb-11">راسلنا</li>
      </ul>
      <Button classes="px-11">تطوع معنا</Button>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
<style lang=""></style>
