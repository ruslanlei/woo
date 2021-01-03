<template>
  <button
    v-on="$on"
    :class="{
      'button': true,
      [`button-state__${state}`]: !!state,
      [`button-size__${size}`]: !!size,
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    size: String,
    state: String,
  },
};
</script>

<style lang="scss">
.button {
  border: none;
  transition: .15s color, .15s background-color;
  background: transparent;
  padding: 0;
  @include content-centred;
  &:hover,
  &:focus,
  &:active, {
    cursor: pointer;
    outline: none;
  }
}

@each $size, $v, $h, $fs, $lh in (
    ("sm", 13, 14, 18, 21),
    ("xs", 22, 26, 18, 21),
    ("lg", 26, 62, 18, 21),
) {
  .button-size__#{$size} {
    font-size: $fs + px;
    line-height: $lh + px;
    padding: $v + px $h + px;
  }
}

@each $state, $color, $background, $border, $hoverColor, $hoverBackground, $hoverBorder in (
    ("purple-transparent", $color-purple-deep, transparent, none, black, transparent, none),
    ("purple", $color-white, $color-purple, $color-white, none, $color-purple-deep, none),
    ("blue-transparent", $color-blue, transparent, none, black, transparent, none),
    ("green", $color-white, $color-green, $color-white, none, $color-green-deep, none),
    ("yellow", $color-white, $color-yellow, $color-white, none, $color-yellow-deep, none),
    ("red", $color-white, $color-red, $color-white, none, $color-red-deep, none),
    (
      "white-transparent",
      $color-white,
      transparent,
      $color-white,
      $color-purple,
      $color-white,
      $color-white
    ),
) {
  .button-state__#{$state} {
    color: $color;
    background: $background;
    border-color: $border;
    &:hover {
      color: $hoverColor;
      background: $hoverBackground;
      border-color: $hoverBorder;
    }
  }
}
</style>
