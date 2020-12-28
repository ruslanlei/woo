<template>
  <div class="homepage">
    <WelcomeSection class="homepage__welcome-section" />
    <FeaturesSection class="homepage__features-section" />
  </div>
</template>

<script>
import WelcomeSection from '@/components/LandingSections/WelcomeSection.vue';
import FeaturesSection from '@/components/LandingSections/FeaturesSection.vue';

export default {
  name: 'Home',
  components: {
    WelcomeSection,
    FeaturesSection,
  },
};
</script>

<style lang="scss">
  .homepage {
    &__welcome-section {
      position: relative;
      z-index: 1;
    }
    &__features-section {
      position: relative;
      z-index: 2;
    }
  }
</style>
