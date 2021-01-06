<template>
  <div class="cta-section">
    <div class="cta-section__text">
      WooCommerce - the
      <span class="cta-section__text-bold">most customizable eCommerce platform</span>
      for building
      <span class="cta-section__text-bold">your online business.</span>
    </div>
    <Button
      class="cta-section__button"
      state="white-transparent"
      size="xs"
    >
      GET STARTED
    </Button>
  </div>
</template>

<script>
import SectionMixin from '@/mixins/SectionMixin';
import Button from '@/components/Button/Button.vue';

export default {
  name: 'CtaSection',
  mixins: [SectionMixin],
  components: {
    Button,
  },
};
</script>

<style lang="scss">
  .cta-section {
    background: $color-purple-medium;
    height: 261px;
    @include content-centred;
    &__text {
      max-width: 855px;
      @include text-lg;
      color: $color-white;
      &-bold {
        font-weight: bold;
      }
    }
    &__button {
      margin-left: 67px;
      border-width: 2px;
      border-style: solid;
      border-radius: 62px;
    }
  }
</style>
