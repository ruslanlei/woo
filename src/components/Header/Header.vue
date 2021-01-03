<template>
  <div :class="computedClasses">
    <Container class="header__container">
      <img
        class="header__logo"
        :src="require('@/assets/img/logo.svg')"
        alt="Logo"
      >
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
          name: 'features',
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
      activeSection: 'getActiveSection',
    }),
    computedClasses() {
      switch (this.activeSection) {
        case 'WelcomeSection':
          return {
            header: true,
            'header--white-transparent': this.pageYOffset > 300 && this.pageYOffset <= 800,
            'header--white': this.pageYOffset > 800,
          };
        case 'FeaturesSection':
          return {
            header: true,
            'header--white': this.pageYOffset > 800,
          };
        case 'AdditionalFeaturesSection':
        case 'CtaSection':
        case 'Footer':
          return {
            header: true,
            'header--purple': true,
          };
        case 'TestimonialsSection':
          return {
            header: true,
            'header--white': true,
          };
        case 'PeopleSection':
          return {
            header: true,
            'header--white': true,
          };
        default:
          return {
            header: true,
          };
      }
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
    &--white-transparent {
      backdrop-filter: blur(20px);
      background: rgba($color-blue-light, 0.9);
    }
    &--white {
      backdrop-filter: blur(20px);
      background: rgba($color-white, 0.9);
      box-shadow: 0 1px 2px rgba(black, 0.1);
    }
    &--purple {
      backdrop-filter: blur(20px);
      background: rgba($color-purple, 0.9);
    }
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
