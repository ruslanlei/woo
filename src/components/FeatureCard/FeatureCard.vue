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
      <div class="feature-card__button">
        <q-btn
          v-bind="buttonProps"
          no-caps
        >
          Customize & Extend ›
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureCard',
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
            textColor: 'info',
            padding: '0 2px',
            flat: true,
          };
        case 'additional':
        case 'additional-reverse':
          return {
            color: 'positive',
            padding: '14px 28px',
            unelevated: true,
            style: 'border-radius: 60px',
          };
        default:
          return null;
      }
    },
  },
};
</script>

<style lang="scss">
  .feature-card {
    $container-width: 430px;
    @include scalable(max-width, $container-width);
    &--primary {
      .feature-card__img-container {
        @include scalable(height, 293px);
      }
      .feature-card__heading {
        color: $color-purple-deep;
      }
    }
    &--additional {
      display: flex;
      align-items: flex-end;
      @include scalable(max-width, 980px);
      @include tablet-or-tighter {
        flex-direction: column;
        align-items: flex-start;
        max-width: $container-width * 0.6;
      }
      .feature-card__img-container {
        @include scalable(max-width, $container-width);
        @include scalable(max-height, 571px);
        @include content-centred;
      }
      .feature-card__info {
        @include scalable(padding-bottom, 40px);
        @include scalable(margin-left, 70px);
        @include tablet-or-tighter {
          margin-left: 0;
        }
      }
      .feature-card__heading {
        color: $color-white;
      }
      .feature-card__text {
        color: $color-white;
        @include scalable(margin-top, 15px);
        @include scalable(line-height, 32px);
        @include scalable(margin-top, 20px);
      }
    }
    &--additional-reverse {
      display: flex;
      align-items: flex-start;
      flex-direction: row-reverse;
      @include scalable(max-width, 980px);
      @include tablet-or-tighter {
        flex-direction: column;
        max-width: $container-width * 0.6;
      }
      .feature-card__img-container {
        @include scalable(max-width, $container-width);
        @include scalable(max-height, 571px);
        @include scalable(margin-left, 70px);
        @include tablet-or-tighter {
          margin-left: 0;
        }
        @include content-centred;
      }
      .feature-card__heading {
        color: $color-white;
      }
      .feature-card__text {
        color: $color-white;
        @include scalable(margin-top, 15px);
        @include scalable(line-height, 32px);
        @include scalable(margin-top, 20px);
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
