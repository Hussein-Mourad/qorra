<script setup>
import { RouterLink } from 'vue-router'
import Button from './Button.vue'
import SearchInput from './SearchInput.vue'
</script>

<template>
  <nav class="px-6 py-2 shadow-sm transition-all">
    <div class="flex items-center justify-between">
      <button @click="toggleMenu()" class="lg:hidden">
        <img src="@/assets/imgs/mobile_burger_menu.svg" alt="burger menu" />
      </button>

      <form class="hidden lg:flex">
        <Button classes="px-11 ml-5">تطوع معنا</Button>
        <SearchInput />
      </form>

      <ul class="hidden items-center text-xl lg:flex">
        <li class="pl-16">الرئيسية</li>
        <li class="pl-16">من نحن</li>
        <li class="pl-32">راسلنا</li>
      </ul>

      <RouterLink to="/">
        <div class="h-9 w-10 md:h-16 md:w-20">
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
