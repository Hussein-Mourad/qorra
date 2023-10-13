<template>
  <!-- <div class="mb-8 grid w-full place-items-center"> -->
  <div class="inline-block text-3xl lg:text-5xl">
    <h1>
      {{ preText }} <span class="category_title">{{ text }}</span>
    </h1>
    <div class="relative">
      <svg
        class="absolute -bottom-2 left-6 -z-50 w-7 lg:-bottom-0 lg:left-8 lg:w-12"
        xmlns="http://www.w3.org/2000/svg"
        width="49"
        height="44"
        viewBox="0 0 49 44"
        fill="none"
      >
        <path
          d="M5.74298 43L47.743 0.999999"
          stroke="#FECE2F"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M1 30.6968L23.68 8.01678"
          stroke="#FECE2F"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    preText: String,
    text: String
  }
}
</script>
<style scoped>
.category_title {
  font-family: Cairo;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(94deg, #5367ff 16.43%, #e553ff 113.38%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
