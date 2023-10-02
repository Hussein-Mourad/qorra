<template>
  <nav class="bg-gray-800 p-4">
    <div class="flex items-center justify-between">
      <div class="text-white">
        <router-link to="/" class="text-2xl font-semibold"> Your Logo </router-link>
      </div>
      <div class="lg:hidden">
        <button @click="toggleNavbar" class="text-white">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              v-if="!isNavbarActive"
              d="M4 6h16M4 12h16M4 18h16"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              v-else
              d="M6 18L18 6M6 6l12 12"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div :class="{ hidden: !isNavbarActive, 'lg:flex': true }">
        <router-link to="/about" class="px-4 py-2 text-white"> About </router-link>
        <router-link to="/contact" class="px-4 py-2 text-white"> Contact </router-link>
        <!-- Add more links as needed -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavbarActive: false
    }
  },
  methods: {
    toggleNavbar() {
      this.isNavbarActive = !this.isNavbarActive
    }
  }
}
</script>
