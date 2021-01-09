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
            $payment-w: 430px;

            border-radius: 17px;
            width: $payment-w;
            @include tighter-than-wide-desktop {
              width: $payment-w * 0.8;
            }
            @include tighter-than-desktop {
              width: $payment-w * 0.6;
            }
          }
          &-apple-pay {
            $apple-pay-width: 55px;
            $apple-pay-left: -70px;

            z-index: 3;
            left: -70px;
            top: -10px;
            width: $apple-pay-width;
            @include tighter-than-wide-desktop {
              width: $apple-pay-width * 0.8;
              left: $apple-pay-left * 0.8;
            }
            @include tighter-than-desktop {
              width: $apple-pay-width * 0.6;
              left: $apple-pay-left * 0.6;
            }
          }
          &-payment-settings {
            $payment-settings-w: 220px;
            $payment-settings-top: 40px;
            $payment-settings-left: -110px;

            z-index: 2;
            left: $payment-settings-left;
            top: $payment-settings-top;
            width: $payment-settings-w;
            border-radius: 10px;
            @include tighter-than-wide-desktop {
              width: $payment-settings-w * 0.8;
              left: $payment-settings-left * 0.8;
              top: $payment-settings-top * 0.8;
            }
            @include tighter-than-desktop {
              width: $payment-settings-w * 0.6;
              left: $payment-settings-left * 0.6;
              top: $payment-settings-top * 0.6;
            }
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
          $phone-w: 430px;
          $cards-w: 105px;
          &-phone {
            border-radius: 17px;
            width: $phone-w;
            @include tighter-than-wide-desktop {
              width: $phone-w * 0.8;
            }
            @include tighter-than-desktop {
              width: $phone-w * 0.6;
            }
          }
          &-facebook {
            $fb-left: 40px;

            z-index: 2;
            border-radius: 10px;
            width: $cards-w;
            left: $fb-left;
            @include tighter-than-wide-desktop {
              width: $cards-w * 0.8;
              border-radius: 5px;
              left: $fb-left * 0.8;
            }
            @include tighter-than-desktop {
              width: $cards-w * 0.6;
              left: $fb-left * 0.6;
            }
          }
          &-google {
            $g-bottom: -30px;

            bottom: $g-bottom;
            z-index: 2;
            width: $cards-w;
            border-radius: 10px;
            @include tighter-than-wide-desktop {
              width: $cards-w * 0.8;
              border-radius: 5px;
              bottom: $g-bottom * 0.8;
            }
            @include tighter-than-desktop {
              width: $cards-w * 0.6;
              bottom: $g-bottom * 0.6;
            }
          }
          &-jetpack {
            $jetpack-right: 100px;
            $jetpack-top: 140px;

            z-index: 2;
            right: $jetpack-right;
            top: $jetpack-top;
            width: $cards-w;
            border-radius: 10px;
            @include tighter-than-wide-desktop {
              width: $cards-w * 0.8;
              border-radius: 5px;
              right: $jetpack-right * 0.8;
              top: $jetpack-top * 0.8;
            }
            @include tighter-than-desktop {
              width: $cards-w * 0.6;
              right: $jetpack-right * 0.6;
              top: $jetpack-top * 0.6;
            }
          }
          &-mail-chimp {
            $mail-chimp-right: 35px;
            $mail-chimp-top: 22px;

            z-index: 2;
            right: 35px;
            top: 22px;
            width: $cards-w;
            border-radius: 10px;
            @include tighter-than-wide-desktop {
              width: $cards-w * 0.8;
              border-radius: 5px;
              right: $mail-chimp-right * 0.8;
              top: $mail-chimp-top * 0.8;
            }
            @include tighter-than-desktop {
              width: $cards-w * 0.6;
              right: $mail-chimp-right * 0.6;
              top: $mail-chimp-top * 0.6;
            }
          }
          &-square {
            top: -50px;
            left: 40px;
            z-index: 2;
            width: $cards-w;
            border-radius: 10px;
            @include tighter-than-wide-desktop {
              width: $cards-w * 0.8;
              border-radius: 5px;
              left: 30px;
              top: -15px;
            }
            @include tighter-than-desktop {
              width: $cards-w * 0.6;
            }
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
        @include tighter(700) {
          margin-top: 100px;
        }
        &-image {
          &-employe {
            $employe-w: 430px;

            border-radius: 17px;
            width: $employe-w;
            @include tighter-than-wide-desktop {
              width: $employe-w * 0.8;
            }
            @include tighter-than-desktop {
              width: $employe-w * 0.6;
            }
          }
          &-people {
            $people-w: 114px;
            $people-top: -130px;
            $people-right: 50px;

            top: $people-top;
            right: $people-right;
            z-index: 2;
            width: $people-w;
            @include tighter-than-wide-desktop {
              width: $people-w * 0.8;
              top: $people-top * 0.8;
              right: $people-right * 0.8;
            }
            @include tighter-than-desktop {
              width: $people-w * 0.6;
              top: $people-top * 0.6;
              right: $people-right * 0.6;
            }
          }
          &-laptop {
            $laptop-w: 140px;
            $laptop-top: -50px;
            $laptop-left: 40px;

            top: $laptop-top;
            left: $laptop-left;
            z-index: 2;
            width: $laptop-w;
            @include tighter-than-wide-desktop {
              width: $laptop-w * 0.8;
              top: $laptop-top * 0.8;
              left: $laptop-left * 0.8;
            }
            @include tighter-than-desktop {
              width: $laptop-w * 0.6;
              top: $laptop-top * 0.6;
              left: $laptop-left * 0.6;
            }
          }
          &-girls {
            $girls-w: 170px;
            $girls-right: -60px;
            $girls-bottom: 50px;

            right: $girls-right;
            bottom: $girls-bottom;
            z-index: 2;
            width: $girls-w;
            @include tighter-than-wide-desktop {
              width: $girls-w * 0.8;
              right: $girls-right * 0.8;
              bottom: $girls-bottom * 0.8;
            }
            @include tighter-than-desktop {
              width: $girls-w * 0.6;
              right: $girls-right * 0.6;
              bottom: $girls-bottom * 0.6;
            }
          }
        }
      }
    }
  }
</style>
