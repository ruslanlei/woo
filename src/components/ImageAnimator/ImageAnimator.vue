<template>
  <div ref="animator" class="image-animator">
    <slot :id="id" />
  </div>
</template>

<script>
import anime from 'animejs';
import debounce from 'lodash/debounce';
import animationTypes from './animationTypes';

export default {
  name: 'ImageAnimator',
  props: {
    initialize: {
      type: Boolean,
      required: true,
    },
    animationType: {
      type: String,
      default: null,
    },
    preAnimationType: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    id: null,
    animation: null,
    animationPaused: false,
    isAnimatorVisible: true,
    preAnimationPlayed: false,
    animationTypes,
  }),
  methods: {
    genId() {
      this.id = Math.random().toString(36).substr(2, 9);
    },
    playAnimation() {
      this.animation.play();
      this.animationPaused = false;
    },
    pauseAnimation() {
      this.animation.pause();
      this.animationPaused = true;
    },
    pauseAnimationOnScroll() {
      if (this.animation && this.preAnimationPlayed) {
        if (!this.animationPaused) {
          this.pauseAnimation();
        }
        this.adjournAnimationPlay();
      }
    },
    receiveVisibility() {
      if (this.$refs.animator) {
        const animatorRect = this.$refs.animator.getBoundingClientRect();

        const targetPositionTop = window.pageYOffset + animatorRect.top;
        const targetPositionBottom = window.pageYOffset + animatorRect.bottom;

        const windowPositionTop = window.pageYOffset;
        const windowPositionBottom = window.pageYOffset + document.documentElement.clientHeight;

        this.isAnimatorVisible = targetPositionBottom > windowPositionTop
          && targetPositionTop < windowPositionBottom;
      }
    },
    initializeAnimation() {
      if (!this.initialize) return;

      if (this.preAnimationType) {
        this.animation = anime({
          targets: `.image-animator__pre-animation-item-${this.id}`,
          ...this.animationTypes[this.preAnimationType],
          complete: () => {
            this.preAnimationPlayed = true;
          },
        });

        if (this.animationType) {
          const { duration } = this.animation;
          setTimeout(() => {
            this.animation = anime({
              targets: `.image-animator__item-${this.id}`,
              loop: true,
              ...this.animationTypes[this.animationType],
            });
            this.animation.restart();
          }, duration);
        }
      } else if (this.animationType) {
        this.preAnimationPlayed = true;
        this.animation = anime({
          targets: `.image-animator__item-${this.id}`,
          loop: true,
          ...this.animationTypes[this.animationType],
        });
      }
    },
  },
  watch: {
    initialize() {
      this.initializeAnimation();
    },
    isAnimatorVisible(newVal, oldVal) {
      if (newVal === oldVal || !this.animation) return;
      // eslint-disable-next-line no-unused-expressions
      newVal ? this.playAnimation() : this.pauseAnimation();
    },
  },
  created() {
    this.genId();
    this.adjournAnimationPlay = debounce(this.playAnimation, 150);
    window.addEventListener('scroll', this.pauseAnimationOnScroll);
    window.addEventListener('scroll', this.receiveVisibility);
  },
  mounted() {
    this.receiveVisibility();
    if (this.initialize) {
      this.initializeAnimation();
    }
  },
};
</script>

<style lang="scss">
  .image-animator {
    width: 100%;
    height: 100%;
    position: relative;
    @include content-centred;
  }
</style>