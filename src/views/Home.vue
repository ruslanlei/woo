<template>
  <div class="homepage">
    <WelcomeSection class="homepage__section homepage__welcome-section" />
    <FeaturesSection class="homepage__section homepage__features-section" />
    <AdditionalFeaturesSection class="homepage__section homepage__additional-features-section" />
    <TestimonialsSection class="homepage__section homepage__testimonials-section" />
    <PeopleSection class="homepage__section homepage__people-section" />
    <CtaSection class="homepage__section homepage__cta-section"></CtaSection>
  </div>
</template>

<script>
import WelcomeSection from '@/components/LandingSections/WelcomeSection.vue';
import FeaturesSection from '@/components/LandingSections/FeaturesSection.vue';
import AdditionalFeaturesSection from '@/components/LandingSections/AdditionalFeaturesSection.vue';
import TestimonialsSection from '@/components/LandingSections/TestimonialsSection.vue';
import PeopleSection from '@/components/LandingSections/PeopleSection.vue';
import CtaSection from '@/components/LandingSections/CtaSection.vue';

export default {
  name: 'Home',
  components: {
    WelcomeSection,
    FeaturesSection,
    AdditionalFeaturesSection,
    TestimonialsSection,
    PeopleSection,
    CtaSection,
  },
};
</script>

<style lang="scss">
  .homepage {
    &__section {
      position: relative;
    }
    &__welcome-section {
      z-index: 1;
    }
    &__features-section {
      z-index: 2;
    }
    &__additional-features-section {
      z-index: 3;
    }
    &__testimonials-section {
      z-index: 4;
    }
  }
</style>
