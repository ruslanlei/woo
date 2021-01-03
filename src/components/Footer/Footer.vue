<template>
  <div class="footer">
    <div class="footer__top-section">
      <Container size="md" class="footer__top-section-container">
        <div class="footer__image-animator-wrapper">
          <ImageAnimator
            class="footer__image-animator"
            :initialize="initializeAnimation"
            animation-type="flashes"
          >
            <template v-slot:default="slotProps">
              <img
                :class="[
                  [`image-animator__item-${slotProps.id}`],
                  [`image-animator__pre-animation-item-${slotProps.id}`]
                ]"
                :src="require('@/assets/img/footer/circle.svg')"
                alt="circle"
              >
            </template>
          </ImageAnimator>
        </div>
        <div class="footer__row footer__row-top">
          <div class="footer__features">
            <div class="footer__feature">
              <img :src="require('@/assets/img/footer/features/arrow.svg')" alt="arrow-icon">
              <div class="footer__feature-text">
                30 day money back guarantee
              </div>
            </div>
            <div class="footer__feature">
              <img :src="require('@/assets/img/footer/features/disk.svg')" alt="disk-icon">
              <div class="footer__feature-text">
                Support teams across the world
              </div>
            </div>
            <div class="footer__feature">
              <img :src="require('@/assets/img/footer/features/lock.svg')" alt="lock-icon">
              <div class="footer__feature-text">
                Safe & Secure online payment
              </div>
            </div>
          </div>
          <img class="footer__logo" :src="require('@/assets/img/footer/logo.svg')" alt="logo">
        </div>
        <div class="footer__divider" />
        <div class="footer__row footer__row-bottom">
          <div
            class="footer__column"
            v-for="(column, index) in Object.keys(columns)"
            :key="index"
          >
            <div class="footer__column-heading">
              {{ column.replaceAll('_', ' ').toUpperCase() }}
            </div>
            <div>
              <div
                class="footer__column-link"
                v-for="(link, index) in columns[column]"
                :key="index"
              >
                {{ link.name }}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <div class="footer__bottom-section">
      <Container size="md" class="footer__bottom-section-container">
        <div class="footer__bottom-section-column">
          <img
            class="footer__bottom-section-icon"
            :src="require('@/assets/img/footer/social/twitter.svg')"
            alt="twitter"
          >
          <img
            class="footer__bottom-section-icon"
            :src="require('@/assets/img/footer/social/facebook.svg')"
            alt="facebook"
          >
          <img
            class="footer__bottom-section-icon"
            :src="require('@/assets/img/footer/social/wifi.svg')"
            alt="wifi"
          >
          <img
            class="footer__bottom-section-icon"
            :src="require('@/assets/img/footer/social/instagram.svg')"
            alt="instagram"
          >
        </div>
        <div class="footer__bottom-section-column">
          COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS  PRIVACY POLICY
        </div>
        <div class="footer__bottom-section-column">
          <img :src="require('@/assets/img/footer/automattic.png')" alt="automattic">
        </div>
      </Container>
    </div>
  </div>
</template>

<script>
import SectionMixin from '@/mixins/SectionMixin';
import ImageAnimator from '@/components/ImageAnimator/ImageAnimator.vue';

export default {
  name: 'Footer',
  mixins: [SectionMixin],
  components: {
    ImageAnimator,
  },
  data: () => ({
    columns: {
      who_we_are: [
        { name: 'About' },
        { name: 'Team' },
        { name: 'Work With Us' },
      ],
      woocommerce: [
        { name: 'Features' },
        { name: 'Payments' },
        { name: 'Marketing' },
        { name: 'Shipping' },
        { name: 'Extension Store' },
        { name: 'eCommerce blog' },
        { name: 'Development blog' },
        { name: 'Ideas board' },
        { name: 'Mobile App' },
        { name: 'Community' },
        { name: 'Style Guide' },
        { name: 'Email Newsletter' },
      ],
      other_products: [
        { name: 'Storefront' },
        { name: 'WooSlider' },
        { name: 'Sensei' },
        { name: 'Sensei Extensions' },
      ],
      support: [
        { name: 'Documentation' },
        { name: 'Customizations' },
        { name: 'Support Policy' },
        { name: 'Contact' },
        { name: 'COVID-19 Resources' },
        { name: 'Privacy Notice for' },
        { name: 'California Users' },
      ],
      we_recommend: [
        { name: 'WooExperts' },
        { name: 'Hosting' },
        { name: 'Solutions' },
        { name: 'Pre-sales' },
        { name: 'FAQ' },
        { name: 'Success' },
        { name: 'Stories' },
        { name: 'Design' },
        { name: 'Feedback' },
        { name: 'Group' },
      ],
    },
  }),
};
</script>

<style lang="scss">
  .footer {
    position: relative;
    &__top-section {
      background: $color-purple;
      &-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    &__image-animator {
      width: 90px;
      height: 90px;
      &-wrapper {
        position: absolute;
        top: -60px;
        right: 0;
      }
    }
    &__features {
      width: 100%;
      @include content-centred;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__feature {
      @include content-centred;
      &-text {
        margin-left: 15px;
        font-size: $text-md;
        color: $color-white;
      }
    }
    &__logo {
      margin-top: 135px;
    }
    &__divider {
      height: 1px;
      width: 100%;
      max-width: 1480px;
      background: $color-purple-light;
      margin: 0 auto;
    }
    &__row {
      width: 100%;
      flex-direction: column;
      &-top {
        height: 45%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 51px 0 56px 0;
        max-width: 1227px;
      }
      &-bottom {
        height: 55%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding: 70px;
        max-width: 1106px;
      }
    }
    &__column {
      &-heading {
        font-size: $text-xs;
        color: $color-white;
        font-weight: bold;
      }
      &-link {
        font-size: $text-xxs;
        color: $color-white;
        margin-top: 8px;
        &:first-child {
          margin-top: 16px;
        }
      }
    }
    &__container {
      @include content-centred;
      flex-direction: column;
      height: 100%;
    }
    &__bottom-section {
      background: $color-white;
      height: 68px;
      @include content-centred;
      &-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      &-column {
        flex-grow: 1;
        @include content-centred;
        &:first-child {
          justify-content: flex-start;
        }
        &:last-child {
          justify-content: flex-end;
        }
      }
      &-icon {
        &:first-child {
          margin-left: 0;
        }
        margin-left: 54px;
      }
    }
  }
</style>
