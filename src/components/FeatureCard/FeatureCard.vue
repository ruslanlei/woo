<template>
  <div
    :class="{
      'feature-card': true,
      'feature-card--primary': type === 'primary',
      'feature-card--additional': type === 'additional',
      'feature-card--additional-reverse': type === 'additional-reverse'
    }"
  >
    <div class="feature-card__img-container">
      <slot />
    </div>
    <div class="feature-card__info">
      <div class="feature-card__heading">
        {{ heading }}
      </div>
      <div class="feature-card__text">
        {{ text }}
      </div>
      <Button
        class="feature-card__button"
        v-bind="buttonProps"
      >
        {{ buttonText }}
      </Button>
    </div>
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
    type: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    buttonProps() {
      switch (this.type) {
        case 'primary':
          return {
            state: 'blue-transparent',
          };
        case 'additional':
          return {
            state: 'green',
            size: 'xs',
          };
        case 'additional-reverse':
          return {
            state: 'green',
            size: 'xs',
          };
        default:
          return 'blue-transparent';
      }
    },
  },
};
</script>

<style lang="scss">
  .feature-card {
    max-width: 431px;
    @include tighter-than-wide-desktop {
      max-width: 350px;
    }
    &--primary {
      .feature-card__img-container {
        height: 293px;
      }
      .feature-card__heading {
        color: $color-purple-deep;
      }
    }
    &--additional {
      display: flex;
      align-items: flex-end;
      max-width: 980px;
      .feature-card__img-container {
        max-width: 430px;
        max-height: 571px;
        @include content-centred;
      }
      .feature-card__info {
        margin-left: 70px;
        padding-bottom: 40px;
        @include tighter-than-wide-desktop {
          margin-left: 60px;
        }
      }
      .feature-card__heading {
        color: $color-white;
      }
      .feature-card__text {
        color: $color-white;
        margin-top: 15px;
        @include tighter-than-wide-desktop {
          line-height: 24px;
          margin-top: 20px;
        }
      }
      .feature-card__button {
        border-radius: 37px;
      }
    }
    &--additional-reverse {
      display: flex;
      align-items: flex-start;
      flex-direction: row-reverse;
      max-width: 980px;
      .feature-card__img-container {
        max-width: 430px;
        max-height: 571px;
        margin-left: 70px;
        @include content-centred;
        @include tighter-than-wide-desktop {
          margin-left: 60px;
        }
      }
      .feature-card__heading {
        color: $color-white;
      }
      .feature-card__text {
        color: $color-white;
        margin-top: 15px;
        @include tighter-than-wide-desktop {
          line-height: 24px;
          margin-top: 20px;
        }
      }
      .feature-card__button {
        border-radius: 37px;
      }
    }
    &__img-container {
      width: 100%;
      position: relative;
      @include content-centred;
    }
    &__heading {
      @include text-lg;
      line-height: 70px;
      font-weight: bold;
      @include additional-font;
      margin-top: 40px;
    }
    &__text {
      @include text-sm;
      line-height: 30px;
      margin-top: 5px;
      color: $color-grey-2;
      @include tighter-than-wide-desktop {
        margin-top: 20px;
      }
    }
    &__button {
      line-height: 25px;
      margin-top: 25px;
      @include tighter-than-wide-desktop {
        margin-top: 20px;
      }
    }
  }
</style>
