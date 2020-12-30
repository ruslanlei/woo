<template>
  <div class="homepage">
    <WelcomeSection class="homepage__section homepage__welcome-section" />
    <FeaturesSection class="homepage__section homepage__features-section" />
    <AdditionalFeaturesSection class="homepage__section homepage__additional-features-section" />
    <TestimonialsSection class="homepage__section homepage__testimonials-section" />
  </div>
</template>

<script>
import WelcomeSection from '@/components/LandingSections/WelcomeSection.vue';
import FeaturesSection from '@/components/LandingSections/FeaturesSection.vue';
import AdditionalFeaturesSection from '@/components/LandingSections/AdditionalFeaturesSection.vue';
import TestimonialsSection from '@/components/LandingSections/TestimonialsSection.vue';

export default {
  name: 'Home',
  components: {
    WelcomeSection,
    FeaturesSection,
    AdditionalFeaturesSection,
    TestimonialsSection,
  },
};
</script>

<style lang="scss">
  .homepage {
    &__section {
      position: relative;
      max-height: 1400px;
    }
    &__welcome-section {
      z-index: 1;
    }
    &__features-section {
      z-index: 2;
    }
    &__additional-features-section {
      z-index: 3;
      max-height: 1110px;
    }
    &__testimonials-section {
      z-index: 4;
    }
  }
</style>
