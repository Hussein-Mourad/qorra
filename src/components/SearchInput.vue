<template>
  <div class="relative">
    <div class="absolute inset-y-0 right-0 flex items-center pl-3">
      <img src="@/assets/imgs/search.svg" alt="magnifying glass icon" />
    </div>
    <input
      type="text"
      :class="[
        'w-full rounded-sm bg-[#eee] py-2 pl-4 pr-7  focus:outline-none focus:ring focus:ring-[#5165FD]',
        classes
      ]"
      placeholder="بحث"
    />
  </div>
</template>

<script>
export default {
  props: {
    classes: String
  },
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    updateSearch() {
      // You can perform real-time search-related logic here
    },
    search() {
      // Perform the search operation using this.searchQuery
      console.log('Search for:', this.searchQuery)
    },
    clearSearch() {
      this.searchQuery = ''
    }
  }
}
</script>
