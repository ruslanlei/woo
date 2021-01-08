<template>
  <div class="cta-section">
    <div class="cta-section__text">
      WooCommerce - the
      <span class="cta-section__text-bold">most customizable eCommerce platform</span>
      for building
      <span class="cta-section__text-bold">your online business.</span>
    </div>
    <q-btn
      class="cta-section__button"
      color="secondary"
      outline
      padding="20px 40px"
      style="border-radius: 40px"
    >
      GET STARTED
    </q-btn>
  </div>
</template>

<script>
import SectionMixin from '@/mixins/SectionMixin';

export default {
  name: 'CtaSection',
  mixins: [SectionMixin],
};
</script>

<style lang="scss">
  .cta-section {
    background: $color-purple-medium;
    height: 261px;
    @include content-centred;
    @include tighter-than-wide-desktop {
      height: 180px;
    }
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
