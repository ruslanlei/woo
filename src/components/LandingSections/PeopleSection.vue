<template>
  <div class="people-section">
    <Container class="people-section__container">
      <div class="people-section__heading">
        Supported by real people
      </div>
      <div class="people-section__text">
        Our team of Happiness Engineers works remotely
        from 58 countries providing customer support across multiple time zones.
      </div>
      <ImageAnimator
        class="people-section__image-animator"
        :initialize="initializeAnimation"
        pre-animation-type="growth"
        animation-type="flashes"
      >
        <template v-slot:default="slotProps">
          <img
            v-for="image in images"
            :key="image.name"
            :class="[
              [`image-animator__item-${slotProps.id}`],
              [`image-animator__pre-animation-item-${slotProps.id}`],
              'people-section__image-animator-image',
              [`people-section__image-animator-image-${image.name}`]
            ]"
            :src="require(`@/assets/img/sections/people/ImageAnimator/${image.filename}`)"
            :alt="image.name"
          />
        </template>
      </ImageAnimator>
      <div class="people-section__people-image-container">
        <img
          class="people-section__people-image"
          :src="require('@/assets/img/sections/people/people.png')"
          alt="people"
        >
      </div>
    </Container>
  </div>
</template>

<script>
import SectionMixin from '@/mixins/SectionMixin';
import ImageAnimator from '@/components/ImageAnimator/ImageAnimator.vue';

export default {
  name: 'PeopleSection',
  mixins: [SectionMixin],
  components: {
    ImageAnimator,
  },
  data: () => ({
    images: require.context(
      '@/assets/img/sections/people/ImageAnimator',
      true,
      /^.*\.png|svg|jpg$/,
    )
      .keys()
      .map((img) => ({
        name: img.replace(/\.\//g, '').replace(/\.png|\.svg|\.jpg/g, ''),
        filename: img.replace(/\.\//g, ''),
      })),
  }),
};
</script>

<style lang="scss">
  .people-section {
    &__container {
      position: relative;
      overflow-y: hidden;
      @include content-centred;
      flex-direction: column;
    }
    &__heading {
      @include heading-dark;
      margin-top: 33px;
    }
    &__text {
      @include text-sm;
      margin-top: 31px;
      max-width: 660px;
      text-align: center;
      color: $color-grey-2;
      line-height: 25px;
    }
    &__image-animator {
      position: absolute;
      width: 100%;
      height: 60%;
      bottom: 0;
      left: 0;
      &-image {
        position: absolute;
        &-circle-xl {
          left: 2%;
          top: 14%;
        }
        &-circle-md {
          right: 12%;
          top: 12%;
        }
        &-circle-sm {
          left: 8%;
          bottom: 22%;
        }
        &-dots-grid-green {
          left: 0;
          bottom: -15%;
        }
        &-dots-grid-red {
          right: 5%;
          bottom: -20%;
        }
      }
    }
    &__people-image-container {
      position: relative;
      z-index: 2;
      overflow: hidden;
      width: 1438px;
      min-width: 1438px;
      height: 292px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
  }
</style>
