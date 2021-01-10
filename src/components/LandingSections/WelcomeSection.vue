<template>
  <div class="welcome-section">
    <Container size="md" class="welcome-section__container">
      <img
        v-if="componentVisible"
        :src="require('@/assets/img/sections/welcome/w-letter.svg')"
        alt="background-letter"
        class="welcome-section__background-letter"
      >
      <div class="welcome-section__columns-wrapper">
        <div class="welcome-section__column welcome-section__column-left">
          <div class="welcome-section__main-heading">
            Building exactly the eCommerce website you want.
          </div>
          <div class="welcome-section__main-heading-description">
            WooCommerce is a customizable, open-source eCommerce platform built on WordPress.
            Get started quickly and make your way.
          </div>
          <div class="welcome-section__row">
            <q-btn
              class="welcome-section__button-start"
              color="primary"
              no-caps
              padding="20px 64px"
              style="border-radius: 60px"
            >
              Start a New Store
            </q-btn>
            <div class="welcome-section__row-divider">
              or
            </div>
            <q-btn
              class="welcome-section__button-customize"
              color="transparent"
              flat
              no-caps
              text-color="info"
              padding="0 6px"
            >
              Customize & Extend ›
            </q-btn>
          </div>
          </div>
        <div class="welcome-section__column welcome-section__column-right">
          <ImageAnimator
            :initialize="initializeAnimation"
            pre-animation-type="growth"
            animation-type="default"
          >
            <template v-slot:default="slotProps">
              <img
                v-for="image in images"
                :key="image.name"
                :class="[
                  [`image-animator__item-${slotProps.id}`],
                  [`image-animator__pre-animation-item-${slotProps.id}`],
                  'welcome-section__image-animator-image',
                  [`welcome-section__image-animator-image-${image.name}`]
                ]"
                :src="
                  require(`@/assets/img/sections/welcome/ImageAnimator/${image.filename}`)
                "
                :alt="image.name"
              />
              <q-btn
                v-for="button in buttons"
                :key="button.name"
                unelevated
                :class="[
                  [`image-animator__item-${slotProps.id}`],
                  [`image-animator__pre-animation-item-${slotProps.id}`],
                  'welcome-section__image-animator-button',
                  [`welcome-section__image-animator-button-${button.name}`]
                ]"
                v-bind="button.attrs"
              />
            </template>
          </ImageAnimator>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import SectionMixin from '@/mixins/SectionMixin';
import ImageAnimator from '@/components/ImageAnimator/ImageAnimator.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'WelcomeSection',
  mixins: [SectionMixin],
  components: {
    ImageAnimator,
  },
  data: () => ({
    images: require.context(
      '@/assets/img/sections/welcome/ImageAnimator',
      true,
      /^.*\.png|svg|jpg$/,
    )
      .keys()
      .map((img) => ({
        name: img.replace(/\.\//g, '').replace(/\.png|\.svg|\.jpg/g, ''),
        filename: img.replace(/\.\//g, ''),
      })),
    buttons: [
      {
        name: 'sale',
        state: 'green',
        attrs: {
          label: 'S A L E',
          rounded: true,
          color: 'positive',
          padding: '6px 33px',
        },
      },
      {
        name: 'shield',
        state: 'red',
        attrs: {
          icon: 'verified_user',
          rounded: true,
          color: 'negative',
          size: 'lg',
          padding: '10px 23px',
        },
      },
      {
        name: 'cart',
        state: 'yellow',
        attrs: {
          icon: 'add_shopping_cart',
          rounded: true,
          color: 'warning',
          size: 'lg',
          padding: '11px',
        },
      },
    ],
  }),
  computed: {
    ...mapGetters({
      pageYOffset: 'getPageYOffset',
    }),
  },
};
</script>

<style lang="scss">
  .welcome-section {
    position: relative;
    height: 100vh;
    max-height: 1400px;
    background: $color-gradient-blue;
    overflow: hidden;
    &__background-letter {
      $letter-width: 1767px;
      $shift: -$letter-width / 2.5;
      position: fixed;
      @include max-scalable(top, $shift);
      @include max-scalable(right, $shift);
      @include max-scalable(width, $letter-width);
    }
    &__container {
      position: relative;
      height: 100%;
      @include tighter-than-wide-desktop {
        padding: 0 160px;
      }
      @include tighter-than-desktop {
        padding: 0 120px;
      }
      @include tighter(1100) {
        padding: 0 92px;
      }
      @include tighter-than-tablet {
        padding: 0 50px;
      }
      @include mobile {
        padding: 0 18px;
      }
    }
    &__columns-wrapper {
      @include content-centred;
      height: 100%;
      position: relative;
      z-index: 2;
      @include tighter(1100) {
        justify-content: flex-start;
      }
    }
    &__column {
      width: 50%;
    }
    &__column-left {
      position: relative;
      z-index: 2;
      width: 70%;
      @include tighter(1100) {
        position: relative;
        z-index: 2;
        width: 100%;
      }
    }
    &__column-right {
      $animator-h: 500px;
      margin-right: 40px;
      @include scalable(height, $animator-h);
      @include tighter(1100) {
        position: absolute;
        z-index: 1;
        right: -36%;
      }
      @include tighter-than-tablet {
        right: 0;
        opacity: 0.09;
      }
      @include mobile {
        display: none;
      }
    }
    &__image-animator {
      &-image {
        position: absolute;
        &-shoes {
          left: 10%;
          z-index: 2;
          @include scalable(width, 907px);
        }
        &-girls {
          z-index: 3;
          top: -5%;
          left: 6%;
          border-radius: 20px;
          @include scalable(width, 254px);
        }
        &-payments {
          z-index: 3;
          bottom: -20%;
          left: 28%;
          @include scalable(width, 406px);
        }
        &-dots-grid-horizontal {
          opacity: 0.5;
          z-index: 1;
          top: 17%;
          left: -7%;
          @include scalable(width, 552px);
        }
        &-dots-grid-vertical {
          opacity: 0.5;
          z-index: 1;
          top: -22%;
          right: -3%;
          @include scalable(width, 250px);
        }
        &-dots-grid-vertical-purple {
          opacity: 0.5;
          z-index: 1;
          bottom: -28%;
          right: -26%;
          @include scalable(width, 250px);
        }
      }
      &-button {
        position: absolute !important;
        z-index: 3;
        @include tighter-than-desktop {
          display: none;
        }
        &-sale {
          width: 147px;
          height: 54px;
          top: 5%;
          right: 16%;
          border-radius: 37px;
        }
        &-shield {
          width: 98px;
          height: 68px;
          right: -17%;
          bottom: 0;
          border-radius: 31px;
        }
        &-cart {
          left: 11%;
          bottom: 10%;
          width: 75px;
          height: 75px;
          border-radius: 37px;
        }
      }
    }
    &__row {
      display: flex;
      align-items: center;
      margin-top: 31px;
      @include tablet-or-tighter {
        flex-direction: column;
        align-items: flex-start;
        margin-top: 18px;
      }
    }
    &__button-start {
      border-radius: 60px;
    }
    &__button-customize {
      margin: 10px 16px;
      @include tablet-or-tighter {
        padding: 16px 34px;
      }
    }
    &__row-divider {
      margin-left: 24px;
      margin-right: 12px;
      @include text-sm;
      @include tablet-or-tighter {
        display: none;
      }
    }
    &__main-heading {
      @include additional-font;
      @include text-xxl;
      font-weight: bold;
      color: $color-purple-deep;
      max-width: 818px;
      @include tighter-than-wide-desktop {
        max-width: 750px;
      }
      @include tighter(1100) {
        max-width: 600px;
      }
      @include mobile {
        margin-top: 90px;
        letter-spacing: -3px;
      }
    }
    &__main-heading-description {
      margin-top: 29px;
      max-width: 716px;
      color: $color-grey-2;
      @include text-sm;
      @include tighter-than-wide-desktop {
        max-width: 600px;
      }
    }
  }
</style>
