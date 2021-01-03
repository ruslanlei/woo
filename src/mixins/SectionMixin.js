import { mapActions } from 'vuex';
import VisibilityMixin from '@/mixins/VisibilityMixin';
import Container from '@/components/Container/Container.vue';

export default {
  mixins: [VisibilityMixin],
  components: {
    Container,
  },
  data: () => ({
    sectionActive: false,
    initializeAnimation: false,
  }),
  methods: {
    ...mapActions({
      receiveActiveSection: 'receiveActiveSection',
    }),
    checkActiveSection() {
      if (
        this.windowPositionTop >= this.targetPositionTop
        && this.windowPositionTop <= this.targetPositionBottom
      ) {
        this.sectionActive = true;
        this.receiveActiveSection(this.$options.name);
      } else {
        this.sectionActive = false;
      }
    },
  },
  watch: {
    percentageOfVisibility(val) {
      if (this.initializeAnimation) return;
      if (val >= 35) {
        this.$nextTick(() => {
          this.initializeAnimation = true;
        });
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.checkActiveSection);
  },
  mounted() {
    this.checkActiveSection();
  },
};
