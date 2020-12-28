<template>
  <div>
    <Header />
    <slot></slot>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';

export default {
  name: 'mainLayout',
  components: {
    Header,
  },
};
</script>

<style lang="scss">

</style>
