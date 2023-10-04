<script setup>
import { RouterLink } from 'vue-router'
import Button from './Button.vue'
import SearchInput from './SearchInput.vue'
</script>

<template>
  <nav class="px-4 py-2 shadow-sm transition-all lg:px-6">
    <div class="flex items-center justify-between">
      <button @click="toggleMenu()" class="lg:hidden">
        <img src="@/assets/imgs/mobile_burger_menu.svg" alt="burger menu" />
      </button>

      <form class="hidden lg:flex">
        <Button classes="px-11 py-2 2xl:py-8 2xl:px-20 2xl:text-4xl ml-5">تطوع معنا</Button>
        <SearchInput />
      </form>

      <ul class="hidden items-center text-xl lg:flex 2xl:text-4xl">
        <li class="pl-16">الرئيسية</li>
        <li class="pl-16">من نحن</li>
        <li class="pl-32">راسلنا</li>
      </ul>

      <RouterLink to="/">
        <div class="h-8 w-10 md:h-12 md:w-14 lg:h-16 lg:w-20 2xl:h-32 2xl:w-40">
          <img src="@/assets/imgs/logo.png" alt="Qorra logo" />
        </div>
      </RouterLink>
    </div>
    <div :class="[{ hidden: !showMenu }, 'py-10 text-xl lg:hidden']">
      <ul>
        <li class="pb-11">الرئيسية</li>
        <li class="pb-11">من نحن</li>
        <li class="pb-11">راسلنا</li>
      </ul>
      <Button classes="px-11 py-2">تطوع معنا</Button>
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
