<template>
  <div class="card-slider">
    <div class="card-slider__card card-slider__card-top-phantom">
      <img
        class="card-slider__card-quotes"
        :src="require('@/assets/img/sections/testimonials/quotes.svg')"
        alt="quotes"
      >
      <div class="card-slider__card-text">
        {{ prevCardText }}
      </div>
    </div>
    <div class="card-slider__card card-slider__card-top">
      <img
        class="card-slider__card-quotes"
        :src="require('@/assets/img/sections/testimonials/quotes.svg')"
        alt="quotes"
      >
      <div class="card-slider__card-text">
        {{ activeCardText }}
      </div>
    </div>
    <div class="card-slider__card card-slider__card-mid">
      <img
        class="card-slider__card-quotes"
        :src="require('@/assets/img/sections/testimonials/quotes.svg')"
        alt="quotes"
      >
      <div class="card-slider__card-text">
        {{ nextCardText }}
      </div>
    </div>
    <div class="card-slider__card card-slider__card-bottom" />
    <div class="card-slider__card card-slider__card-bottom-phantom" />
    <div class="card-slider__controls">
      <q-btn
        unelevated
        class="card-slider__controls-button"
      >
        <img
          :src="require('@/assets/img/sections/testimonials/arrow-left.svg')"
          @click="showPrev"
        />
      </q-btn>
      <q-btn
        unelevated
        class="card-slider__controls-button"
      >
        <img
          :src="require('@/assets/img/sections/testimonials/arrow-right.svg')"
          @click="showNext"
        />
      </q-btn>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';
import VisibilityMixin from '@/mixins/VisibilityMixin';

export default {
  name: 'CardSlider',
  mixins: [VisibilityMixin],
  props: {
    autoplay: {
      type: Boolean,
      default: false,
    },
    commentsList: {
      type: Array,
      required: true,
    },
    animationDuration: {
      type: Number,
      default: 400,
    },
  },
  data: () => ({
    autoplayInitialized: false,
    timer: null,
    prevCardText: '',
    activeCardText: '',
    nextCardText: '',
    prevCommentIndex: null,
    activeCommentIndex: 0,
    nextCommentIndex: 1,
    isBusy: false,
  }),
  methods: {
    showComments(activeIndex, nextIndex, prevIndex) {
      this.activeCardText = this.commentsList[activeIndex];
      this.nextCardText = this.commentsList[nextIndex];
      this.prevCardText = this.commentsList[prevIndex];
    },
    increaseIndex(idx) {
      return this.listLength - (idx + 1) >= 0 ? idx + 1 : 0;
    },
    decreaseIndex(idx) {
      return idx - 1 >= 0 ? idx - 1 : this.listLength;
    },
    leafVisibleList() {
      this.prevCommentIndex = this.increaseIndex(this.prevCommentIndex);
      this.activeCommentIndex = this.increaseIndex(this.activeCommentIndex);
      this.nextCommentIndex = this.increaseIndex(this.nextCommentIndex);
    },
    leafBackVisibleList() {
      this.prevCommentIndex = this.decreaseIndex(this.prevCommentIndex);
      this.activeCommentIndex = this.decreaseIndex(this.activeCommentIndex);
      this.nextCommentIndex = this.decreaseIndex(this.nextCommentIndex);
    },
    showPrev() {
      if (this.isBusy) return;
      this.isBusy = true;
      this.removeTimer();
      const callback = () => {
        this.leafBackVisibleList();
        this.showComments(this.activeCommentIndex, this.nextCommentIndex, this.prevCommentIndex);
        this.isBusy = false;
        this.initializeAutoplay();
      };
      let topPhantomCardAnimation = anime({
        targets: '.card-slider__card-top-phantom',
        opacity: [
          { value: 0, duration: 0 },
          { value: 1, duration: this.animationDuration },
          { value: 0, duration: 0 },
        ],
        translateY: [
          { value: '-46%', duration: 0 },
          { value: 0, duration: this.animationDuration },
          { value: '-46%', duration: 0 },
        ],
        easing: 'easeInOutQuad',
        complete: () => {
          callback();
          topPhantomCardAnimation.remove('.card-slider__card-top-phantom');
          topPhantomCardAnimation = undefined;
        },
      });
      let topCardAnimation = anime({
        targets: '.card-slider__card-top',
        scale: [
          { value: 1, duration: 0 },
          { value: 0.9, duration: this.animationDuration },
          { value: 1, duration: 0 },
        ],
        translateY: [
          { value: 0, duration: 0 },
          { value: '18%', duration: this.animationDuration },
          { value: 0, duration: 0 },
        ],
        easing: 'easeInOutQuad',
        complete: () => {
          topCardAnimation.remove('.card-slider__card-top');
          topCardAnimation = undefined;
        },
      });
      let midCardAnimation = anime({
        targets: '.card-slider__card-mid',
        scale: [
          { value: 0.9, duration: 0 },
          { value: 0.8, duration: this.animationDuration },
          { value: 0.9, duration: 0 },
        ],
        translateY: [
          { value: '18%', duration: 0 },
          { value: '36%', duration: this.animationDuration },
          { value: '18%', duration: 0 },
        ],
        easing: 'easeInOutQuad',
        complete: () => {
          midCardAnimation.remove('.card-slider__card-mid');
          midCardAnimation = undefined;
        },
      });
      let bottomCardAnimation = anime({
        targets: '.card-slider__card-bottom',
        scale: [
          { value: 0.8, duration: 0 },
        ],
        opacity: [
          { value: 1, duration: 0 },
          { value: 0, duration: this.animationDuration },
          { value: 1, duration: 0 },
        ],
        translateY: [
          { value: '36%', duration: 0 },
          { value: '26%', duration: this.animationDuration },
          { value: '36%', duration: 0 },
        ],
        easing: 'easeInOutQuad',
        complete: () => {
          bottomCardAnimation.remove('.card-slider__card-bottom');
          bottomCardAnimation = undefined;
        },
      });
    },
    showNext() {
      if (this.isBusy) return;
      this.isBusy = true;
      this.removeTimer();
      const callback = () => {
        this.leafVisibleList();
        this.showComments(this.activeCommentIndex, this.nextCommentIndex, this.prevCommentIndex);
        this.isBusy = false;
        this.initializeAutoplay();
      };
      let topCardAnimation = anime({
        targets: '.card-slider__card-top',
        opacity: [
          { value: 1, duration: 0 },
          { value: 0, duration: this.animationDuration },
          { value: 1, duration: 0 },
        ],
        translateY: [
          { value: 0, duration: 0 },
          { value: '-46%', duration: this.animationDuration },
          { value: 0, duration: 0 },
        ],
        easing: 'easeInOutQuad',
        complete: () => {
          callback();
          topCardAnimation.remove('.card-slider__card-top');
          topCardAnimation = undefined;
        },
      });
      let midCardAnimation = anime({
        targets: '.card-slider__card-mid',
        scale: [
          { value: 0.9, duration: 0 },
          { value: 1, duration: this.animationDuration },
          { value: 0.9, duration: 0 },
        ],
        translateY: [
          { value: '18%', duration: 0 },
          { value: 0, duration: this.animationDuration },
          { value: '18%', duration: 0 },
        ],
        easing: 'easeInOutQuad',
        complete: () => {
          midCardAnimation.remove('.card-slider__card-mid');
          midCardAnimation = undefined;
        },
      });
      let bottomCardAnimation = anime({
        targets: '.card-slider__card-bottom',
        scale: [
          { value: 0.8, duration: 0 },
          { value: 0.9, duration: this.animationDuration },
          { value: 0.8, duration: 0 },
        ],
        translateY: [
          { value: '36%', duration: 0 },
          { value: '18%', duration: this.animationDuration },
          { value: '36%', duration: 0 },
        ],
        easing: 'easeInOutQuad',
        complete: () => {
          bottomCardAnimation.remove('.card-slider__card-bottom');
          bottomCardAnimation = undefined;
        },
      });
      let bottomPhantomCardAnimation = anime({
        targets: '.card-slider__card-bottom-phantom',
        scale: [
          { value: 0.8, duration: 0 },
        ],
        opacity: [
          { value: 0, duration: 0 },
          { value: 1, duration: this.animationDuration },
          { value: 0, duration: 0 },
        ],
        translateY: [
          { value: '26%', duration: 0 },
          { value: '36%', duration: this.animationDuration },
          { value: '26%', duration: 0 },
        ],
        easing: 'easeInOutQuad',
        complete: () => {
          bottomPhantomCardAnimation.remove('.card-slider__card-bottom');
          bottomPhantomCardAnimation = undefined;
        },
      });
    },
    initializeAutoplay() {
      if (this.autoplay) {
        this.timer = setTimeout(this.showNext, 5000);
      }
    },
    removeTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    },
  },
  computed: {
    listLength() {
      return this.commentsList.length - 1;
    },
  },
  watch: {
    componentVisible(visible) {
      if (visible && !this.autoplayInitialized) {
        this.initializeAutoplay();
        this.autoplayInitialized = true;
      }
    },
  },
  created() {
    this.prevCommentIndex = this.listLength;
    this.showComments(this.activeCommentIndex, this.nextCommentIndex, this.prevCommentIndex);
  },
};
</script>

<style lang="scss">

  $card-width: 730px;
  $card-height: 391px;
  $card-container-height: 530px;

  .card-slider {
    @include max-scalable(width, $card-width);
    @include max-scalable(height, $card-container-height);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    @include mobile {
      height: $card-container-height * 0.4 + 30px;
    }
    &__card {
      @include max-scalable(width, $card-width);
      @include max-scalable(min-width, $card-width);
      @include max-scalable(height, $card-height);
      @include max-scalable(min-height, $card-height);
      @include max-scalable(border-radius, 20px);
      @include max-scalable(padding-left, 82px);
      @include max-scalable(padding-right, 82px);
      @include max-scalable(font-size, $font-size-xm);
      @include max-scalable(line-height, $font-size-xm + 3px);
      @include content-centred;
      color: $color-grey-2;
      text-align: center;
      user-select: none;
      &-quotes {
        position: absolute;
        @include max-scalable(top, 30px);
        @include max-scalable(width, 168px);
      }
      &-text {
        position: relative;
        z-index: 2;
      }
      &-top-phantom {
        position: absolute;
        top: 0;
        transform: translateY(-46%);
        background: $color-white;
        opacity: 0;
        box-shadow: 0 18px 52.8537px rgba(215, 228, 249, 0.5);
        z-index: 5;
      }
      &-top {
        position: absolute;
        top: 0;
        background: $color-white;
        box-shadow: 0 18px 52.8537px rgba(215, 228, 249, 0.5);
        z-index: 4;
      }
      &-mid {
        position: absolute;
        transform: scale(0.9) translateY(18%);
        background: $color-white;
        box-shadow: 0 18px 52.8537px rgba(215, 228, 249, 0.5);
        z-index: 3;
      }
      &-bottom {
        position: absolute;
        transform: scale(0.8) translateY(36%);
        background: $color-white;
        box-shadow: 0 18px 52.8537px rgba(215, 228, 249, 0.5);
        z-index: 2;
      }
      &-bottom-phantom {
        position: absolute;
        opacity: 0;
        transform: scale(0.8) translateY(26%);
        background: $color-white;
        box-shadow: 0 18px 52.8537px rgba(215, 228, 249, 0.5);
        z-index: 1;
      }
    }
    &__controls {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      position: absolute;
      bottom: 0;
      height: 40px;
      @include max-scalable(padding-right, 90px);
      @include max-scalable(padding-top, 15px);
      @include mobile {
        padding: 0;
        justify-content: center;
      }

    }
  }
</style>
