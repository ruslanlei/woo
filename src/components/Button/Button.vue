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

@each $state, $color, $background, $hoverColor, $hoverBackground in (
    ("purple-transparent", $color-purple-deep, transparent, black, transparent),
    ("purple", $color-white, $color-purple, $color-white, $color-purple-deep),
    ("blue-transparent", $color-blue, transparent, black, transparent),
    ("green", $color-white, $color-green, $color-white, $color-green-deep),
    ("yellow", $color-white, $color-yellow, $color-white, $color-yellow-deep),
    ("red", $color-white, $color-red, $color-white, $color-red-deep),
) {
  .button-state__#{$state} {
    color: $color;
    background: $background;
    &:hover {
      color: $hoverColor;
      background: $hoverBackground;
    }
  }
}
</style>
