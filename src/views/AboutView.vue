<template>
  <main>
    <HeroAbout />
    <SponsorsSection />
    <TeamSection />
  </main>
</template>
<script>
import HeroAbout from '../components/HeroAbout.vue'
import SponsorsSection from '../components/SponsorsSection.vue'
import TeamSection from '../components/TeamSection.vue'

export default { components: { HeroAbout, SponsorsSection, TeamSection } }
</script>
