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
    @include content-centred;
    @include scalable(height, 261px);
    @include tablet-or-tighter {
      padding: 24px;
      height: auto;
    }
    @include mobile {
      flex-direction: column;
      align-items: flex-end;
    }
    &__text {
      max-width: 855px;
      color: $color-white;
      @include text-lg;
      @include tighter-than-desktop {
        max-width: 68%;
      }
      @include tablet-or-tighter {
        max-width: 48%;
      }
      @include mobile {
        max-width: 100%;
        text-align: right;
      }
      &-bold {
        font-weight: bold;
      }
    }
    &__button {
      margin-left: 67px;
      @include mobile {
        margin-left: 0;
        margin-top: 20px;
      }
    }
  }
</style>
