<template>
  <div class="search-element">
    <transition name="search-input">
      <input v-if="isOpened" class="search-element__input" type="text">
    </transition>
    <Button
      @click="onClick"
      class="search-element__button"
      :is-square="true"
      size="sm"
      state="purple-transparent"
    >
      <img
        class="search-element__button-icon"
        src="@/assets/icons/magnifier.svg"
        alt=""
      >
    </Button>
  </div>
</template>

<script>
import Button from '@/components/Button/Button.vue';

export default {
  name: 'SearchElement',
  components: {
    Button,
  },
  data: () => ({
    isOpened: false,
  }),
  methods: {
    onClick() {
      this.isOpened = !this.isOpened;
    },
  },
};
</script>

<style lang="scss">
  .search-element {
    @include content-centred;
    &__button {
      &.button {
        padding: 14.5px 30px;
        margin-right: -30px;
      }
    }
    &__button-icon {
      height: 16px;
    }
    &__input {
      width: 300px;
      height: 44px;
      margin-left: 15px;
      background: $color-white;
      border: none;
      border-radius: 5px;
    }
  }
</style>
