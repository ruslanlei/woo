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
    width: $card-width;
    height: $card-container-height;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    @include tighter-than-wide-desktop {
      width: $card-width * 0.8;
      height: $card-container-height * 0.8;
    }
    &__card {
      width: $card-width;
      min-width: $card-width;
      height: $card-height;
      min-height: $card-height;
      @include text-xm;
      padding: 0 82px;
      text-align: center;
      line-height: 39.5px;
      color: $color-grey-2;
      @include content-centred;
      user-select: none;
      @include tighter-than-wide-desktop {
        width: $card-width * 0.8;
        min-width: $card-width * 0.8;
        height: $card-height * 0.8;
        min-height: $card-height * 0.8;
      }
      &-quotes {
        top: 30px;
        position: absolute;
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
        border-radius: 20px;
        box-shadow: 0 18px 52.8537px rgba(215, 228, 249, 0.5);
        z-index: 5;
      }
      &-top {
        position: absolute;
        top: 0;
        background: $color-white;
        border-radius: 20px;
        box-shadow: 0 18px 52.8537px rgba(215, 228, 249, 0.5);
        z-index: 4;
      }
      &-mid {
        position: absolute;
        border-radius: 20px;
        transform: scale(0.9) translateY(18%);
        background: $color-white;
        box-shadow: 0 18px 52.8537px rgba(215, 228, 249, 0.5);
        z-index: 3;
      }
      &-bottom {
        position: absolute;
        border-radius: 20px;
        transform: scale(0.8) translateY(36%);
        background: $color-white;
        box-shadow: 0 18px 52.8537px rgba(215, 228, 249, 0.5);
        z-index: 2;
      }
      &-bottom-phantom {
        position: absolute;
        border-radius: 20px;
        opacity: 0;
        //transform: scale(0.8) translateY(100px);
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
      padding-right: 90px;
      height: 40px;
      &-button {
        transition: .2s;
        user-select: none;
        padding: 0 15px;
        height: 100%;
        @include content-centred;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>
