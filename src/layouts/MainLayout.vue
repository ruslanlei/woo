<template>
  <div>
    <Header />
    <slot></slot>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import Header from '@/components/Header/Header';

export default {
  name: 'mainLayout',
  components: {
    Header,
  },
};
</script>

<style lang="scss">

</style>
