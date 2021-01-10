<template>
  <component ref="layout" :is="layout">
    <router-view/>
  </component>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    MainLayout,
    DefaultLayout,
  },
  methods: {
    ...mapActions({
      receivePageYOffset: 'receivePageYOffset',
      handleBreakpoint: 'layout/HANDLE_LAYOUT_BREAKPOINT',
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
