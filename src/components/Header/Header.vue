<template>
  <div class="header" :style="computedStyles" :class="{'header-filled': pageYOffset > 500}">
    <Container class="header__container">
      <img class="header__logo" src="@/assets/img/logo.svg" alt="Logo">
      <Button
        v-for="nav in navItems"
        :key="nav.name"
        :class="{
          'header__button-transparent': true,
          'push-right': !!nav.pushRight,
        }"
        size="sm"
        state="purple-transparent"
      >
        {{ nav.text }}
      </Button>
      <Button state="purple-transparent" size="sm">Log in</Button>
      <Button
        class="header__button-get-started"
        state="purple"
        size="sm"
      >
        Get started
      </Button>
      <SearchElement />
    </Container>
  </div>
</template>

<script>
import Container from '@/components/Container/Container.vue';
import Button from '@/components/Button/Button.vue';
import SearchElement from '@/components/SearchElement/SearchElement.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  components: {
    Container,
    Button,
    SearchElement,
  },
  data() {
    return {
      navItems: [
        {
          name: 'sell',
          text: 'Sell',
        },
        {
          name: 'marketplace',
          text: 'Marketplace',
        },
        {
          name: 'community',
          text: 'Community',
        },
        {
          name: 'develop',
          text: 'Develop',
        },
        {
          name: 'resources',
          text: 'Resources',
          pushRight: true,
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      pageYOffset: 'getPageYOffset',
    }),
    computedStyles() {
      const windowHeight = window.innerHeight;
      const onePercent = windowHeight / 100;
      const scrolledInPercents = Math.round(this.pageYOffset / onePercent);
      const bgOpacity = (scrolledInPercents / 100).toFixed(1);
      return {
        backgroundColor: [`rgba(255,255,255, ${bgOpacity < 0.2 ? 0 : bgOpacity})`],
      };
    },
  },
};
</script>

<style lang="scss">
  .header {
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100%;
    padding: 37px 0;
    transition: .3s;
    &-filled {
      background: $color-white;
    }
    &__logo {
      margin-right: 144px;
    }
    &__container {
      display: flex;
      align-items: center;
    }
    &__button-get-started {
      border-radius: 5px;
    }
  }
  .push-right {
    margin-right: auto;
  }
</style>
