<template>
  <div class="main-layout">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
  name: 'mainLayout',
  components: {
    Header,
    Footer,
  },
};
</script>
