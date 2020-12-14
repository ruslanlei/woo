<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
};
</script>

<style lang="scss">
  .container {
    max-width: 1810px;
    width: 100%;
    margin: 0 auto;
  }
</style>
