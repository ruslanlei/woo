<template>
  <div ref="features" class="feature-section">
    <div class="feature-section__heading">
      Your eCommerce <br /> made simple
    </div>
    <Container class="feature-section__container">
      <ImageAnimator
        :initialize="initializeAnimation"
        pre-animation-type="drop"
        animation-type="defaultSlow"
      >
        <template v-slot:default="slotProps">
          <template v-for="(feature, index) in features" :key="index">
            <transition name="cards" v-on="{
              ...(index === 'community' ? { enter } : {})
            }">
              <FeatureCard
                v-if="sectionVisible || transitionEnded"
                :heading="feature.heading"
                :text="feature.text"
                :button-text="feature.buttonText"
                :style="{'--i': 0}"
                :class="[
                'feature-section__feature',
                [`feature-section__feature-${feature.name}`]
              ]"
              >
                <img
                  v-for="(image, index) in feature.images"
                  :key="index"
                  :src="require(
                  `@/assets/img/sections/features/${feature.name}/${image.filename}`
                )"
                  :class="[
                    [`image-animator__item-${slotProps.id}`],
                    ...feature.preAnimationItems.includes(image.name)
                      ? [
                          [`image-animator__pre-animation-item-${slotProps.id}`],
                          'feature-section__feature-image-pre-animated',
                        ]
                      : [],
                    'feature-section__feature-image',
                    [`feature-section__feature-${feature.name}-image-${image.name}`]
                  ]"
                >
              </FeatureCard>
            </transition>
          </template>
        </template>
      </ImageAnimator>
    </Container>
  </div>
</template>

<script>
import Container from '@/components/Container/Container.vue';
import FeatureCard from '@/components/FeatureCard/FeatureCard.vue';
import ImageAnimator from '@/components/ImageAnimator/ImageAnimator.vue';

export default {
  name: 'FeaturesSection',
  components: {
    Container,
    FeatureCard,
    ImageAnimator,
  },
  data: () => ({
    initializeAnimation: false,
    sectionVisible: false,
    transitionEnded: false,
    features: {
      start: {
        name: 'start',
        images: require.context(
          '@/assets/img/sections/features/start',
          true,
          /^.*\.png|svg|jpg$/,
        )
          .keys()
          .map((img) => ({
            name: img.replace(/\.\//g, '').replace(/\.png|\.svg|\.jpg/g, ''),
            filename: img.replace(/\.\//g, ''),
          })),
        preAnimationItems: [
          'payment-settings',
          'apple-pay',
        ],
        heading: 'All You Need to Start',
        text: 'Add WooCommerce plugin to any WordPress site and set up a new store in minutes.',
        buttonText: 'Ecommerce for Wordpress ›',
      },
      customize: {
        name: 'customize',
        images: require.context(
          '@/assets/img/sections/features/customize',
          true,
          /^.*\.png|svg|jpg$/,
        )
          .keys()
          .map((img) => ({
            name: img.replace(/\.\//g, '').replace(/\.png|\.svg|\.jpg/g, ''),
            filename: img.replace(/\.\//g, ''),
          })),
        preAnimationItems: [
          'facebook',
          'google',
          'jetpack',
          'mail-chimp',
          'square',
        ],
        heading: 'Customize and Extend',
        text: 'From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable.',
        buttonText: 'Browse Extensions ›',
      },
      community: {
        name: 'community',
        images: require.context(
          '@/assets/img/sections/features/community',
          true,
          /^.*\.png|svg|jpg$/,
        )
          .keys()
          .map((img) => ({
            name: img.replace(/\.\//g, '').replace(/\.png|\.svg|\.jpg/g, ''),
            filename: img.replace(/\.\//g, ''),
          })),
        preAnimationItems: [
          'girls',
          'laptop',
          'people',
        ],
        heading: 'Active Community',
        text: 'WooCommerce is one of the fastest-growing eCommerce communities.',
        buttonText: 'Check our Forums ›',
      },
    },
  }),
  methods: {
    receiveVisibility() {
      const featuresSectionRect = this.$refs.features.getBoundingClientRect();

      const targetPositionTop = window.pageYOffset + featuresSectionRect.top;
      const targetPositionBottom = window.pageYOffset + featuresSectionRect.bottom;

      const windowPositionTop = window.pageYOffset;
      const windowPositionBottom = window.pageYOffset + document.documentElement.clientHeight;

      const vh = window.innerHeight / 100;

      this.$nextTick(() => {
        this.sectionVisible = targetPositionBottom > windowPositionTop
          && targetPositionTop < windowPositionBottom - vh * 50;
      });
    },
    enter() {
      this.transitionEnded = true;
      this.$nextTick(() => {
        this.initializeAnimation = true;
      });
    },
  },
  created() {
    window.addEventListener('scroll', this.receiveVisibility);
  },
  mounted() {
    this.receiveVisibility();
  },
};
</script>

<style lang="scss">
  .feature-section {
    overflow: hidden;
    height: 100vh;
    background: $color-white;
    @include content-centred;
    &__heading {
      position: absolute;
      width: 100%;
      top: 0;
      @include additional-font;
      text-align: center;
      font-size: $text-xl;
      color: $color-purple-deep;
      font-weight: bold;
    }
    &__container {
      margin-top: 80px;
      @include content-centred;
      min-width: 1601px;
    }
    &__feature-image {
      position: absolute;
      &-pre-animated {
        opacity: 0;
      }
    }
    &__feature {
      position: relative;
      margin: 0 35px;
      &:first-child {
        margin-right: 35px;
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
        margin-left: 35px;
      }
      &-start {
        top: -90px;
        &-image {
          &-payment {}
          &-apple-pay {
            z-index: 3;
            left: -100px;
            top: 0;
          }
          &-payment-settings {
            z-index: 2;
            left: -170px;
            bottom: -90px;
          }
        }
      }
      &-customize {
        &-image {
          &-phone {}
          &-facebook {
            left: -10px;
            z-index: 2;
          }
          &-google {
            bottom: -80px;
            z-index: 2;
          }
          &-jetpack {
            z-index: 2;
            right: 40px;
            top: 90px;
          }
          &-mail-chimp {
            z-index: 2;
            right: -10px;
            top: -35px;
          }
          &-square {
            top: -90px;
            left: -10px;
            z-index: 2;
          }
        }
      }
      &-community {
        bottom: -90px;
        &-image {
          &-employe {}
          &-girls {
            right: -110px;
            bottom: 10px;
            z-index: 2;
          }
          &-laptop {
            top: -100px;
            left: 0;
            z-index: 2;
          }
          &-people {
            top: -180px;
            right: -10px;
            z-index: 2;
          }
        }
      }
    }
  }
</style>
