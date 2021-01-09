<template>
  <div class="header" :class="{
    [`header--${headerState}`]: !!headerState
  }">
    <Container class="header__container">
      <img
        class="header__logo"
        :src="require('@/assets/img/logo.svg')"
        alt="Logo"
      >
      <q-btn
        class="header__menu-button"
        icon="menu"
        unelevated
        fab-mini
        @click="switchMobileMenu"
      />
      <div
        class="header__content"
        :class="{
          'header__content--visible': isMenuOpen
        }"
      >
        <div class="header__menu-button-back">
          <q-btn
            class="header__menu-button"
            icon="arrow_forward"
            unelevated
            fab-mini
            @click="switchMobileMenu"
          />
        </div>
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
        <div class="header__options">
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
          >
            Get started
          </q-btn>
          <q-btn
            flat
            :color="buttonsState"
            icon="search"
          />
        </div>
      </div>
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
      isMenuOpen: false,
    };
  },
  methods: {
    switchMobileMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
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
    @include scalable(height, $header-h);
    @include tighter-than-wide-desktop {
      padding: 0 30px;
    }
    @include tighter(1080) {
      padding: 0 15px;
    }
    @include mobile {
      padding: 0;
    }
    &__menu-button {
      position: relative;
      @include wider-than-tablet {
        display: none !important;
      }
      &-back {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 2;
        @include wider-than-tablet {
          display: none !important;
        }
      }
    }
    &__content {
      display: flex;
      width: 100%;
      @include tighter-than-tablet {
        transition: .3s transform;
        position: absolute;
        top: 0;
        right: -400px;
        width: 400px;
        height: 100vh;
        flex-direction: column-reverse;
        padding: 20px;
        background: $color-white;
        box-shadow: 0 18px 52.8537px rgba(215, 228, 249, 0.5);
      }
      @include mobile {
        right: -100%;
        width: 100%;
        box-shadow: none;
      }
      &--visible {
        @include tighter-than-tablet {
          transform: translateX(-100%);
        }
      }
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
      @include tighter-than-tablet {
        flex-direction: column;
        width: 100%;
      }
    }
    &__options {
      display: flex;
      @include tighter-than-tablet {
        flex-direction: column;
      }
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
      @include tighter-than-tablet {
        margin-right: auto;
      }
    }
    &__container {
      display: flex;
      align-items: center;
      height: 100%;
      @include mobile {
        padding: 0 19px;
      }
    }
  }
</style>
