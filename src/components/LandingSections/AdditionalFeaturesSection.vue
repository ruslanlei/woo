<template>
  <div class="additional-features-section">
    <div class="additional-features-section__decoration-layer">
      <div class="additional-features-section__decoration-top" />
      <div class="additional-features-section__decoration-bottom" />
    </div>
    <Container size="sm" class="additional-features-section__container">
      <ImageAnimator
        class="additional-features-section__image-animator"
        :initialize="initializeAnimation && transitionEnded"
        pre-animation-type="growth"
        animation-type="default"
      >
        <template v-slot:default="slotProps">
          <img
            v-for="image in backgroundImages"
            :key="image.name"
            :class="[
              [`image-animator__item-${slotProps.id}`],
              [`image-animator__pre-animation-item-${slotProps.id}`],
              'additional-features-section__image-animator-image',
              [`additional-features-section__image-animator-image-${image.name}`]
            ]"
            :src="
              require(`@/assets/img/sections/additional-features/ImageAnimator/${image.filename}`)
            "
            :alt="image.name"
          >
        </template>
      </ImageAnimator>
      <div class="additional-features-section__card-container">
        <div v-for="(feature, index) in features" :key="index">
          <transition
            name="additional-cards"
            v-on="{
              ...(index === 1 ? { enter } : {})
            }"
          >
            <FeatureCard
              v-if="initializeAnimation || transitionEnded"
              :heading="feature.heading"
              :text="feature.text"
              :button-text="feature.buttonText"
              :style="{'--i': index}"
              :class="[
                'additional-features-section__feature',
                 [`additional-features-section__feature-${feature.name}`]
              ]"
              :type="!(index % 2) ? 'additional' : 'additional-reverse'"
            >
              <img
                v-for="(image, index) in feature.images"
                :key="index"
                :src="require(
                // eslint-disable-next-line max-len
                  `@/assets/img/sections/additional-features/features/${feature.name}/${image.filename}`
                )"
                :class="[
                   [`additional-features-section__feature-${feature.name}-image`]
                ]"
              >
              <img
                v-for="(image, index) in feature.images"
                :key="index"
                :src="require(
                // eslint-disable-next-line max-len
                  `@/assets/img/sections/additional-features/features/${feature.name}/${image.filename}`
                )"
                :class="[
                   [`additional-features-section__feature-${feature.name}-image-bg`]
                ]"
              >
            </FeatureCard>
          </transition>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import SectionMixin from '@/mixins/SectionMixin';
import ImageAnimator from '@/components/ImageAnimator/ImageAnimator.vue';
import FeatureCard from '@/components/FeatureCard/FeatureCard.vue';

export default {
  name: 'AdditionalFeaturesSection',
  mixins: [SectionMixin],
  components: {
    ImageAnimator,
    FeatureCard,
  },
  data: () => ({
    backgroundImages: require.context(
      '@/assets/img/sections/additional-features/ImageAnimator',
      true,
      /^.*\.png|svg|jpg$/,
    )
      .keys()
      .map((img) => ({
        name: img.replace(/\.\//g, '').replace(/\.png|\.svg|\.jpg/g, ''),
        filename: img.replace(/\.\//g, ''),
      })),
    transitionEnded: false,
    features: [
      {
        name: 'develop',
        images: require.context(
          '@/assets/img/sections/additional-features/features/develop',
          true,
          /^.*\.png|svg|jpg$/,
        )
          .keys()
          .map((img) => ({
            name: img.replace(/\.\//g, '').replace(/\.png|\.svg|\.jpg/g, ''),
            filename: img.replace(/\.\//g, ''),
          })),
        heading: 'Develop Without Limits',
        text: 'WooCommerce is developer friendly, too. Built with a REST API, WooCommerce is scalable and can integrate with virtually any service. Design a complex store from scratch, extend a store for a client, or simply add a single product to a WordPress site—your store, your way.',
        buttonText: 'Read the Documentation',
      },
      {
        name: 'community',
        images: require.context(
          '@/assets/img/sections/additional-features/features/community',
          true,
          /^.*\.png|svg|jpg$/,
        )
          .keys()
          .map((img) => ({
            name: img.replace(/\.\//g, '').replace(/\.png|\.svg|\.jpg/g, ''),
            filename: img.replace(/\.\//g, ''),
          })),
        heading: 'Know our Global Community',
        text: 'WooCommerce is one of the fastest-growing eCommerce communities. We’re proud that the helpfulness of the community and a wealth of online resources are frequently cited as reasons our users love it. There are 80+ meetups worldwide!',
        buttonText: 'Read the Documentation',
      },
    ],
  }),
  methods: {
    enter() {
      this.transitionEnded = true;
    },
  },
};
</script>

<style lang="scss">
  .additional-features-section {
    @include content-centred;
    background: $color-purple;
    height: 100vh;
    max-height: 1110px;
    @include tighter-than-wide-desktop {
      max-height: 900px;
    }
    &__feature {
      @include tighter-than-wide-desktop {
        max-width: 780px;
      }
      &-develop {
        position: absolute;
        top: -30px;
        left: 0;
        margin-bottom: 55px;
        &-image {
          position: relative;
          z-index: 2;
          width: 430px;
          @include tighter-than-wide-desktop {
            width: 320px;
          }
        }
        &-image-bg {
          position: absolute;
          z-index: 1;
          bottom: -40px;
          filter: blur(20px) drop-shadow(-25px 20px 44px rgba(84, 48, 209, 0.4));
          transform: scale(0.9);
          @include tighter-than-wide-desktop {
            width: 320px;
          }
        }
      }
      &-community {
        position: absolute;
        bottom: -30px;
        right: 0;
        &-image {
          width: 430px;
          position: relative;
          z-index: 2;
          @include tighter-than-wide-desktop {
            width: 320px;
          }
        }
        &-image-bg {
          position: absolute;
          z-index: 1;
          bottom: -40px;
          filter: blur(20px) drop-shadow(-25px 20px 44px rgba(84, 48, 209, 0.4));
          transform: scale(0.9);
          @include tighter-than-wide-desktop {
            width: 320px;
          }
        }
      }
    }
    &__decoration {
      &-layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
      &-top, &-bottom {
        position: absolute;
        width: 150%;
        height: 60px;
        background: $color-white;
      }
      &-top {
        top: -30px;
        border-radius: 0 0 60% 60% / 0 0 120% 120%;
      }
      &-bottom {
        bottom: -30px;
        border-radius: 60% 60% 0 0 / 120% 120% 0 0;
      }
    }
    &__container {
      position: relative;
      height: 100%;
      display: flex;
      @include content-centred;
    }
    &__features-image-animator {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }
    &__image-animator {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      &-image {
        position: absolute;
        &-circle {
          &-big {
            left: 10%;
            top: 15%;
          }
          &-sm {
            left: 10%;
            top: 8%;
          }
          &-mid {
            right: 10%;
            bottom: 35%;
          }
        }
        &-dots-grid {
          &-vertical {
            left: 10%;
          }
          &-horizontal {
            right: 6%;
            bottom: 25%;
          }
        }
        &-woo {
          right: -10%;
          top: 0;
        }
      }
    }
    &__card-container {
      height: 100%;
      width: 100%;
      position: relative;
      @include tighter-than-wide-desktop {
        max-width: 900px;
      }
    }
  }
</style>
