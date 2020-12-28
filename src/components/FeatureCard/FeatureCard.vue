<template>
  <div class="feature-card">
    <div class="feature-card__img-container">
      <slot />
    </div>
    <div class="feature-card__heading">
      {{ heading }}
    </div>
    <div class="feature-card__text">
      {{ text }}
    </div>
    <Button
      class="feature-card__button"
      state="blue-transparent"
    >
      {{ buttonText }}
    </Button>
  </div>
</template>

<script>
import Button from '@/components/Button/Button.vue';

export default {
  name: 'FeatureCard',
  components: {
    Button,
  },
  props: {
    heading: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  .feature-card {
    max-width: 431px;
    &__img-container {
      width: 100%;
      height: 293px;
      position: relative;
      @include content-centred;
    }
    &__heading {
      font-size: $text-lg;
      line-height: 70px;
      font-weight: bold;
      @include additional-font;
      margin-top: 40px;
    }
    &__text {
      font-size: $text-sm;
      line-height: 30px;
      margin-top: 5px;
      color: $color-grey-2;
    }
    &__button {
      line-height: 25px;
      margin-top: 25px;
    }
  }
</style>
