<template>
  <div class="header" :class="[[`header--${headerState}`]]">
    <Container class="header__container">
      <img
        class="header__logo"
        :src="require('@/assets/img/logo.svg')"
        alt="Logo"
      >
      <div class="header__nav">
        <q-btn
          v-for="nav in navItems"
          :key="nav.name"
          unelevated
          no-caps
          flat
          :color="buttonsState"
        >
          {{ nav.text }}
        </q-btn>
      </div>
      <q-btn
        flat
        :color="buttonsState"
        no-caps
      >
        Log in
      </q-btn>
      <q-btn
        color="primary"
        no-caps
        style="margin-left: 6px"
      >
        Get started
      </q-btn>
      <q-btn
        flat
        :color="buttonsState"
        icon="search"
        style="margin-left: 6px"
      />
    </Container>
  </div>
</template>

<script>
import Container from '@/components/Container/Container.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  components: {
    Container,
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
    buttonsState() {
      switch (this.headerState) {
        case 'purple':
          return 'secondary';
        default:
          return 'accent';
      }
    },
    headerState() {
      const section = this.activeSection;
      const offset = this.pageYOffset;
      switch (section) {
        case 'WelcomeSection':
          if (offset > 300 && offset <= 800) return 'white-transparent';
          if (offset > 800) return 'white';
          break;
        case 'FeaturesSection':
        case 'PeopleSection':
          return 'white';
        case 'AdditionalFeaturesSection':
        case 'CtaSection':
        case 'Footer':
          return 'purple';
        case 'TestimonialsSection':
          return 'white-transparent';
        default:
          return null;
      }
      return null;
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
    $header-h: 120px;
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100%;
    height: $header-h;
    transition: .3s background-color, .3s transform;
    @include tighter-than-wide-desktop {
      height: $header-h * 0.8;
      padding: 0 30px;
    }
    @include tablet-or-tighter {
      height: $header-h * 0.5;
    }
    &--hidden {
      transform: translateY(-120px);
      @include tighter-than-wide-desktop {
        transform: translateY(-86px);
      }
    }
    &__nav {
      margin-right: auto;
      height: 100%;
      position: relative;
      @include content-centred;
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
  }
</style>
