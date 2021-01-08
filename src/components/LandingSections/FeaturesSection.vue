<template>
  <div class="feature-section">
    <div class="feature-section__heading">
      Your eCommerce <br /> made simple
    </div>
    <Container size="md" class="feature-section__container">
      <ImageAnimator
        :initialize="initializeAnimation && transitionEnded"
        pre-animation-type="drop"
        animation-type="defaultSlow"
        class="feature-section__image-animator"
      >
        <template v-slot:default="slotProps">
          <div v-for="(feature, index) in features" :key="index">
            <transition name="cards" v-on="{
              ...(index === 2 ? { enter } : {})
            }">
              <FeatureCard
                v-if="initializeAnimation || transitionEnded"
                :heading="feature.heading"
                :text="feature.text"
                :button-text="feature.buttonText"
                :style="{'--i': index}"
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
                  :class="{
                    [`image-animator__item-${slotProps.id}`]: true,
                    ...(feature.preAnimationItems.includes(image.name)
                      ? {
                          [`image-animator__pre-animation-item-${slotProps.id}`]: true,
                          'feature-section__feature-image-pre-animated': true,
                        } : {}),
                    'feature-section__feature-image': true,
                    'feature-section__feature-image--with-shadow': shadowActive,
                    [`feature-section__feature-${feature.name}-image-${image.name}`]: true
                  }"
                  :alt="image.name"
                />
              </FeatureCard>
            </transition>
          </div>
        </template>
      </ImageAnimator>
    </Container>
  </div>
</template>

<script>
import SectionMixin from '@/mixins/SectionMixin';
import FeatureCard from '@/components/FeatureCard/FeatureCard.vue';
import ImageAnimator from '@/components/ImageAnimator/ImageAnimator.vue';

export default {
  name: 'FeaturesSection',
  mixins: [SectionMixin],
  components: {
    FeatureCard,
    ImageAnimator,
  },
  data: () => ({
    transitionEnded: false,
    shadowActive: false,
    features: [
      {
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
      {
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
      {
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
    ],
  }),
  methods: {
    enter() {
      this.transitionEnded = true;
      setTimeout(() => {
        this.shadowActive = true;
      }, 1700);
    },
  },
};
</script>

<style lang="scss">
  .feature-section {
    position: relative;
    overflow: hidden;
    height: 100vh;
    max-height: 1100px;
    min-height: 900px;
    background: $color-white;
    @include content-centred;
    &__heading {
      @include heading-dark;
      position: absolute;
      width: 100%;
      top: 0;
      text-align: center;
    }
    &__container {
      margin-top: 80px;
      @include content-centred;
      min-width: 1601px;
    }
    &__image-animator {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1500px;
      @include tighter-than-wide-desktop {
        max-width: 1200px;
      }
    }
    &__feature-image {
      position: absolute;
      transition: .7s box-shadow;
      &--with-shadow {
        box-shadow: 0 18px 52.8537px rgba(215, 228, 249, 0.5);
      }
      &-pre-animated {
        opacity: 0;
      }
    }
    &__feature {
      position: relative;
      &-start {
        top: -90px;
        &-image {
          &-payment {
            border-radius: 17px;
            width: 430px;
            @include tighter-than-wide-desktop {
              width: 350px;
            }
          }
          &-apple-pay {
            z-index: 3;
            left: -70px;
            top: -10px;
            width: 55px;
          }
          &-payment-settings {
            z-index: 2;
            left: -110px;
            top: 40px;
            width: 220px;
            border-radius: 10px;
            @include tighter-than-wide-desktop {
              width: 180px;
              left: -100px;
              top: 50px;
            }
          }
        }
      }
      &-customize {
        &-image {
          &-phone {
            border-radius: 17px;
            width: 430px;
            @include tighter-than-wide-desktop {
              width: 350px;
            }
          }
          &-facebook {
            z-index: 2;
            width: 105px;
            border-radius: 10px;
            left: 40px;
            @include tighter-than-wide-desktop {
              width: 85px;
              border-radius: 5px;
              left: 30px;
            }
          }
          &-google {
            bottom: -30px;
            z-index: 2;
            width: 105px;
            border-radius: 10px;
            @include tighter-than-wide-desktop {
              width: 85px;
              border-radius: 5px;
              bottom: -2px;
            }
          }
          &-jetpack {
            z-index: 2;
            right: 100px;
            top: 140px;
            width: 105px;
            border-radius: 10px;
            @include tighter-than-wide-desktop {
              width: 85px;
              border-radius: 5px;
              right: 80px;
              top: 140px;
            }
          }
          &-mail-chimp {
            z-index: 2;
            right: 35px;
            top: 22px;
            width: 105px;
            border-radius: 10px;
            @include tighter-than-wide-desktop {
              width: 85px;
              border-radius: 5px;
              right: 35px;
              top: 38px;
            }
          }
          &-square {
            top: -50px;
            left: 40px;
            z-index: 2;
            width: 105px;
            border-radius: 10px;
            @include tighter-than-wide-desktop {
              width: 85px;
              border-radius: 5px;
              left: 30px;
              top: -15px;
            }
          }
        }
      }
      &-community {
        bottom: -90px;
        &-image {
          &-employe {
            border-radius: 17px;
            width: 430px;
            @include tighter-than-wide-desktop {
              width: 350px;
            }
          }
          &-people {
            top: -130px;
            right: 50px;
            z-index: 2;
            width: 114px;
            @include tighter-than-wide-desktop {
              width: 106px;
              top: -90px;
            }
          }
          &-laptop {
            top: -50px;
            left: 40px;
            z-index: 2;
            width: 140px;
            @include tighter-than-wide-desktop {
              width: 120px;
              top: -20px;
              left: 20px;
            }
          }
          &-girls {
            right: -60px;
            bottom: 50px;
            z-index: 2;
            width: 170px;
            @include tighter-than-wide-desktop {
              width: 150px;
              right: -70px;
              bottom: 70px;
            }
          }
        }
      }
    }
  }
</style>
