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
    background: $color-white;
    padding: 100px 0;
    @include content-centred;
    flex-direction: column;
    @include wider-than-tablet {
      min-height: 1100px;
    }
    &__heading {
      @include heading-dark;
      width: 100%;
      top: 0;
      text-align: center;
    }
    &__container {
      @include content-centred;
      @include wider(620) {
        margin-top: 180px;
      }
    }
    &__image-animator {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1500px;
      @include tighter-than-wide-desktop {
        max-width: 1200px;
      }
      @include tighter-than-desktop {
        max-width: 900px;
      }
      @include tighter-than-tablet {
        max-width: 860px;
        flex-wrap: wrap;
        justify-content: center;
      }
      @include tighter(620) {
        flex-wrap: nowrap;
        flex-direction: column;
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
        @include tighter-than-tablet {
          top: 0;
        }
        @include tighter(620) {
          margin-top: 100px;
        }
        &-image {
          &-payment {
            border-radius: 17px;
            @include scalable(width, 430px);
          }
          &-apple-pay {
            z-index: 3;
            @include scalable(width, 55px);
            @include scalable(left, -70px);
            @include scalable(top, -10px);
          }
          &-payment-settings {
            z-index: 2;
            border-radius: 10px;
            @include scalable(width, 220px);
            @include scalable(left, -110px);
            @include scalable(top, 40px);
          }
        }
      }
      &-customize {
        @include tighter-than-tablet {
          margin-left: 100px;
        }
        @include tighter(700) {
          margin-left: 30px;
        }
        @include tighter(620) {
          margin-left: 0;
        }
        @include tighter(620) {
          margin-top: 100px;
        }
        &-image {
          $cards-w: 105px;
          &-phone {
            @include scalable(width, 430px);
            border-radius: 17px;
          }
          &-facebook {
            @include scalable(width, $cards-w);
            @include scalable(border-radius, 10px);
            @include scalable(left, 40px);
            z-index: 2;
          }
          &-google {
            @include scalable(width, $cards-w);
            @include scalable(border-radius, 10px);
            @include scalable(bottom, -30px);
            z-index: 2;
          }
          &-jetpack {
            @include scalable(width, $cards-w);
            @include scalable(border-radius, 10px);
            @include scalable(right, 100px);
            @include scalable(top, 140px);
            z-index: 2;
          }
          &-mail-chimp {
            @include scalable(width, $cards-w);
            @include scalable(border-radius, 10px);
            @include scalable(right, 35px);
            @include scalable(top, 22px);
            z-index: 2;
          }
          &-square {
            @include scalable(width, $cards-w);
            @include scalable(border-radius, 10px);
            @include scalable(left, 40px);
            @include scalable(top, -50px);
            z-index: 2;
          }
        }
      }
      &-community {
        bottom: -90px;
        @include tighter-than-tablet {
          bottom: 0;
        }
        @include tighter-than-tablet {
          margin-top: 100px;
        }
        &-image {
          &-employe {
            @include scalable(width, 430px);
            @include scalable(border-radius, 17px);
          }
          &-people {
            @include scalable(width, 114px);
            @include scalable(top, -130px);
            @include scalable(right, 50px);
            z-index: 2;
          }
          &-laptop {
            @include scalable(width, 140px);
            @include scalable(top, -50px);
            @include scalable(left, 40px);
            z-index: 2;
          }
          &-girls {
            @include scalable(width, 170px);
            @include scalable(bottom, 50px);
            @include scalable(right, -60px);
            z-index: 2;
          }
        }
      }
    }
  }
</style>
