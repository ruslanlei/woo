<template>
  <div class="header">
    <Container class="header__container">
      <img class="header__logo" src="@/assets/img/logo.svg" alt="Logo">
      <Button :states="['purple-transparent']">Sell</Button>
      <Button :states="['purple-transparent']">Marketplace</Button>
      <Button :states="['purple-transparent']">Community</Button>
      <Button :states="['purple-transparent']">Develop</Button>
      <Button :states="['purple-transparent']">Resources</Button>
      <Button class="header__login-button" :states="['purple-transparent']">Log In</Button>
      <Button :states="['purple']">Get started</Button>
    </Container>
  </div>
</template>

<script>
import Container from '@/components/Container/Container.vue';
import Button from '@/components/Button/Button.vue';

export default {
  name: 'Header',
  components: {
    Container,
    Button,
  },
};
</script>

<style lang="scss">
  .header {
    padding: 37px;
    &__logo {
      margin-right: 144px;
    }
    &__container {
      display: flex;
      align-items: center;
    }
    &__login-button {
      margin-left: auto;
    }
  }
</style>
