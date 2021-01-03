<template>
  <div :class="['container', [`container__${size}`]]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    size: {
      type: String,
      default: 'xl',
    },
  },
};
</script>

<style lang="scss">
  .container {
    width: 100%;
    margin: 0 auto;
    @include tighter(1810) {
      padding: 0 37px;
    }
    &__xl {
      max-width: 1810px;
    }
    &__md {
      max-width: 1601px;
    }
    &__sm {
      max-width: 1229px;
    }
  }
</style>
