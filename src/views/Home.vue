<template>
  <div class="homepage">
    <WelcomeSection class="homepage__section homepage__welcome-section" />
    <FeaturesSection class="homepage__section homepage__features-section" />
    <AdditionalFeaturesSection class="homepage__section homepage__additional-features-section" />
  </div>
</template>

<script>
import WelcomeSection from '@/components/LandingSections/WelcomeSection.vue';
import FeaturesSection from '@/components/LandingSections/FeaturesSection.vue';
import AdditionalFeaturesSection from '@/components/LandingSections/AdditionalFeaturesSection.vue';

export default {
  name: 'Home',
  components: {
    WelcomeSection,
    FeaturesSection,
    AdditionalFeaturesSection,
  },
};
</script>

<style lang="scss">
  .homepage {
    height: 9000px;
    &__section {
      max-height: 1400px;
    }
    &__welcome-section {
      position: relative;
      z-index: 1;
    }
    &__features-section {
      position: relative;
      z-index: 2;
    }
    &__additional-features-section {
      position: relative;
      z-index: 3;
      max-height: 1110px;
    }
  }
</style>
