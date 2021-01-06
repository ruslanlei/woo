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
            <Button
              class="welcome-section__button-start"
              size="lg"
              state="purple"
            >
              Start a New Store
            </Button>
            <div class="welcome-section__row-divider">or</div>
            <Button state="blue-transparent">Customize & Extend ›</Button>
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
              >
              <Button
                v-for="button in buttons"
                :key="button.name"
                :class="[
                  [`image-animator__item-${slotProps.id}`],
                  [`image-animator__pre-animation-item-${slotProps.id}`],
                  'welcome-section__image-animator-button',
                  [`welcome-section__image-animator-button-${button.name}`]
                ]"
                :state="button.state"
                size="sm"
                :is-rounded="true"
              >
                <template v-if="button.content">
                  {{ button.content }}
                </template>
                <template v-else-if="button.icon">
                  <img
                    :src="require(`@/assets/icons/${button.icon}.svg`)"
                    alt=""
                  >
                </template>
              </Button>
            </template>
          </ImageAnimator>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import SectionMixin from '@/mixins/SectionMixin';
import Button from '@/components/Button/Button.vue';
import ImageAnimator from '@/components/ImageAnimator/ImageAnimator.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'WelcomeSection',
  mixins: [SectionMixin],
  components: {
    Button,
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
        content: 'S A L E',
      },
      {
        name: 'shield',
        state: 'red',
        icon: 'protect-shield',
      },
      {
        name: 'cart',
        state: 'yellow',
        icon: 'cart',
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
    z-index: 1;
    &__background-letter {
      position: fixed;
      top: -664px;
      right: -643px;
      width: 1767px;
      height: 1666px;
      @include tighter-than-wide-desktop {
        transform: scale(0.76);
      }
    }
    &__container {
      position: relative;
      height: 100%;
      @include tighter-than-wide-desktop {
        padding: 0 160px;
      }
    }
    &__columns-wrapper {
      @include content-centred;
      height: 100%;
      position: relative;
      z-index: 2;
    }
    &__column {
      width: 50%;
    }
    &__column-left {
      width: 70%;
    }
    &__column-right {
      @include content-centred;
      height: 500px;
      @include tighter-than-wide-desktop {
        transform: scale(0.8);
      }
    }
    &__image-animator {
      &-image {
        position: absolute;
        &-shoes {
          left: 100px;
          z-index: 2;
          width: 907px;
        }
        &-girls {
          z-index: 3;
          top: -20px;
          left: 40px;
          border-radius: 20px;
          width: 254px;
        }
        &-payments {
          z-index: 3;
          bottom: -130px;
          left: 200px;
          width: 406px;
        }
        &-dots-grid-horizontal {
          opacity: 0.5;
          z-index: 1;
          top: 70px;
          left: -40px;
        }
        &-dots-grid-vertical {
          opacity: 0.5;
          z-index: 1;
          top: -110px;
          right: -20px;
        }
        &-dots-grid-vertical-purple {
          opacity: 0.5;
          z-index: 1;
          bottom: -160px;
          right: -180px;
        }
      }
      &-button {
        position: absolute;
        z-index: 3;
        &-sale {
          width: 147px;
          height: 54px;
          top: 20px;
          right: 100px;
          border-radius: 37px;
        }
        &-shield {
          width: 98px;
          height: 68px;
          right: -130px;
          bottom: 0;
          border-radius: 31px;
        }
        &-cart {
          left: 70px;
          bottom: 60px;
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
    }
    &__button-start {
      border-radius: 60px;
    }
    &__row-divider {
      margin: 0 12px;
    }
    &__main-heading {
      @include additional-font;
      @include text-xxl;
      font-weight: bold;
      color: $color-purple-deep;
      max-width: 818px;
      @include tighter-than-wide-desktop {
        max-width: 770px;
      }
    }
    &__main-heading-description {
      margin-top: 29px;
      max-width: 716px;
      color: $color-grey-2;
      @include tighter-than-wide-desktop {
        max-width: 700px;
      }
    }
  }
</style>
