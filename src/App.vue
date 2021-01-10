<template>
  <component ref="layout" :is="layout">
    <router-view/>
  </component>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    MainLayout,
  },
  methods: {
    ...mapActions({
      receivePageYOffset: 'receivePageYOffset',
      handleBreakpoint: 'layout/handleLayoutBreakpoint',
    }),
  },
  computed: {
    layout() {
      return this.$route.meta.layout || 'mainLayout';
    },
  },
  created() {
    window.addEventListener('scroll', () => {
      this.receivePageYOffset(window.pageYOffset);
    });
    window.addEventListener('resize', this.handleBreakpoint);
    window.addEventListener('orientationchange', this.handleBreakpoint);
    this.handleBreakpoint();
  },
};
</script>
