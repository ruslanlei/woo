<template>
  <div :class="computedClasses">
    <Container class="header__container">
      <img
        class="header__logo"
        :src="require('@/assets/img/logo.svg')"
        alt="Logo"
      >
      <div class="header__nav">
        <Button
          v-for="nav in navItems"
          :key="nav.name"
          :class="{
            'header__button-transparent': true,
          }"
          size="sm"
          :state="
            activeSection === 'AdditionalFeaturesSection'
              ? 'white-transparent'
              : 'purple-transparent'
          "
        >
          {{ nav.text }}
        </Button>
      </div>
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
      hideHeader: true,
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
      const classes = {
        header: true,
        'header--hidden': this.hideHeader && this.pageYOffset > 200,
      };
      const addClasses = {
        WelcomeSection: {
          'header--white-transparent': this.pageYOffset > 300 && this.pageYOffset <= 800,
          'header--white': this.pageYOffset > 800,
        },
        FeaturesSection: {
          'header--white': this.pageYOffset > 800,
        },
        AdditionalFeaturesSection: {
          'header--purple': true,
        },
        TestimonialsSection: {
          'header--white': true,
        },
        PeopleSection: {
          'header--white': true,
        },
        CtaSection: {
          'header--purple': true,
        },
        Footer: {
          'header--purple': true,
        },
      };
      return {
        ...classes,
        ...addClasses[this.activeSection],
      };
    },
  },
  watch: {
    pageYOffset(newVal, oldVal) {
      this.hideHeader = newVal > oldVal;
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
    height: 120px;
    transition: .3s background-color, .3s transform;
    @include tighter-than-wide-desktop {
      height: 86px;
      padding: 0 30px;
    }
    &--hidden {
      transform: translateY(-120px);
      @include tighter-than-wide-desktop {
        transform: translateY(-86px);
      }
    }
    &__nav {
      display: flex;
      margin-right: auto;
    }
    &--white-transparent {
      backdrop-filter: blur(20px);
      background: rgba($color-blue-light, 0.9);
      box-shadow: 0 1px 2px rgba(black, 0.1);
    }
    &--white {
      backdrop-filter: blur(20px);
      background: rgba($color-white, 0.9);
      box-shadow: 0 1px 2px rgba(black, 0.1);
    }
    &--purple {
      backdrop-filter: blur(20px);
      background: rgba($color-purple, 0.9);
      box-shadow: 0 1px 2px rgba(black, 0.1);
    }
    &-filled {
      background: $color-white;
    }
    &__logo {
      margin-right: 144px;
      @include tighter-than-wide-desktop {
        margin-right: 60px;
        width: 140px;
      }
    }
    &__container {
      display: flex;
      align-items: center;
      height: 100%;
    }
    &__button-get-started {
      border-radius: 5px;
    }
  }
</style>
