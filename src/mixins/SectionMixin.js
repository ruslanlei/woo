import { mapActions } from 'vuex';
import VisibilityMixin from '@/mixins/VisibilityMixin';

export default {
  mixins: [VisibilityMixin],
  data: () => ({
    sectionActive: false,
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
  created() {
    window.addEventListener('scroll', this.checkActiveSection);
  },
  mounted() {
    this.checkActiveSection();
  },
};
