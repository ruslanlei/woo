<template>
  <div class="testimonials-section">
    <Container class="testimonials-section__container">
      <div class="testimonials-section__heading">
        Trusted by Agencies
        & Store Owners
      </div>
      <ImageAnimator
        class="testimonials-section__image-animator"
        :initialize="initializeAnimation"
        pre-animation-type="dropTestimonials"
        animation-type="flashesTestimonials"
      >
        <template v-slot:default="slotProps">
          <img
            v-for="image in backgroundImages"
            :key="image.name"
            :class="[
              [`image-animator__item-${slotProps.id}`],
              [`image-animator__pre-animation-item-${slotProps.id}`],
              'testimonials-section__image-animator-image',
              [`testimonials-section__image-animator-image-${image.name}`]
            ]"
            :src="require(`@/assets/img/sections/testimonials/ImageAnimator/${image.filename}`)"
            :alt="image.name"
          >
        </template>
      </ImageAnimator>
      <CardSlider
        class="testimonials-section__card-slider"
        :animation-duration="400"
        :comments-list="commentsList"
        :autoplay="true"
      />
    </Container>
  </div>
</template>

<script>
import SectionMixin from '@/mixins/SectionMixin';
import CardSlider from '@/components/CardSlider/CardSlider.vue';
import ImageAnimator from '@/components/ImageAnimator/ImageAnimator.vue';

export default {
  name: 'TestimonialsSection',
  mixins: [SectionMixin],
  components: {
    CardSlider,
    ImageAnimator,
  },
  data: () => ({
    commentsList: [
      'No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn\'t charge you a portion of your profits as your business grows!',
      'Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
      'Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.',
      'Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32',
      'За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
      'Mauris rhoncus odio leo, id vestibulum massa tempor id. Ut eleifend odio augue. Vestibulum bibendum, erat ut consequat sagittis, orci sem tincidunt nulla, vitae aliquet mauris eros eget nisi.',
      'Sed efficitur odio ac dui ultricies, sed molestie ante elementum. Vestibulum facilisis leo nec lorem ultricies facilisis. Etiam commodo nec quam vel luctus.',
      'Nulla tortor leo, ullamcorper nec laoreet faucibus, condimentum quis mauris. Integer eu facilisis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Fusce iaculis est vel orci accumsan, vel ullamcorper magna pretium. Nullam massa mi, faucibus eu eleifend sit amet, pulvinar eleifend lorem.',
    ],
    backgroundImages: require.context(
      '@/assets/img/sections/testimonials/ImageAnimator',
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
  .testimonials-section {
    background: linear-gradient(
      180deg,
      rgba(236, 240, 253, 0) 0%,
      rgba(236, 240, 253, 0.53) 14.32%,
      #ECF0FD 45.83%,
      rgba(236, 240, 253, 0.43) 84.33%,
      rgba(236, 240, 253, 0) 100%
    );
    @include scalable(height, 1300px);
    @include mobile {
      height: auto;
    }
    &__container {
      position: relative;
      height: 100%;
      @include content-centred;
      @include mobile {
        height: auto;
        padding: 100px 0;
        flex-direction: column;
      }
    }
    &__heading {
      @include heading-dark;
      letter-spacing: -1px;
      position: absolute;
      top: 14%;
      max-width: 570px;
      text-align: center;
      @include mobile {
       position: relative;
      }
    }
    &__image-animator {
      position: absolute;
      width: 100%;
      height: 100%;
      @include tighter-than-desktop {
        opacity: 0.4;
        width: 85%;
        height: 85%;
      }
      @include tighter-than-subTablet {
        display: none;
      }
      &-image {
        position: absolute;
        opacity: 0;
        &-employe-1 {
          @include scalable(top, 20%);
          @include scalable(left, 18%);
          @include scalable(width, 136px);
        }
        &-employe-2 {
          @include scalable(top, 16%);
          @include scalable(right, 20%);
          @include scalable(width, 94px);
        }
        &-employe-3 {
          @include scalable(top, 36%);
          @include scalable(right, 8%);
          @include scalable(width, 154px);
        }
        &-employe-4 {
          @include scalable(bottom, 26%);
          @include scalable(right, 16%);
          @include scalable(width, 89px);
        }
        &-employe-5 {
          @include scalable(bottom, 30%);
          @include scalable(left, 12%);
          @include scalable(width, 105px);
        }
        &-employe-6 {
          @include scalable(top, 38%);
          @include scalable(left, 6%);
          @include scalable(width, 93px);
        }
        &-dots-grid-red {
          @include scalable(top, 34%);
          @include scalable(right, 22%);
          @include scalable(width, 472px);
        }
        &-dots-grid-green {
          @include scalable(bottom, 28%);
          @include scalable(left, 22%);
          @include scalable(width, 472px);
        }
      }
    }
    &__card-slider {
      @include mobile {
        margin-top: 40px;
      }
    }
  }
</style>
