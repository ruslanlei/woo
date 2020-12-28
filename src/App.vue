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
  },
};
</script>
