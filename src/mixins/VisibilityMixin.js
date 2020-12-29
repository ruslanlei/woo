import { mapActions } from 'vuex';

export default {
  data: () => ({
    componentVisible: false,
    percentageOfVisibility: 0,
    targetPositionTop: null,
    targetPositionBottom: null,
    windowPositionTop: null,
    windowPositionBottom: null,
  }),
  methods: {
    ...mapActions({
      receiveActiveSection: 'receiveActiveSection',
    }),
    receiveVisibility() {
      let componentRect = this.$el.getBoundingClientRect();

      this.targetPositionTop = window.pageYOffset + componentRect.top;
      this.targetPositionBottom = window.pageYOffset + componentRect.bottom;

      this.windowPositionTop = window.pageYOffset;
      this.windowPositionBottom = window.pageYOffset + document.documentElement.clientHeight;

      this.componentVisible = this.targetPositionBottom > this.windowPositionTop
        && this.targetPositionTop < this.windowPositionBottom;

      if (this.componentVisible) {
        const onePercent = componentRect.height / 100;

        this.percentageOfVisibility = this.windowPositionTop < this.targetPositionTop
          ? Math.round((this.windowPositionBottom - this.targetPositionTop) / onePercent)
          : Math.round((this.targetPositionBottom - this.windowPositionTop) / onePercent);
      } else {
        this.percentageOfVisibility = 0;
      }

      componentRect = undefined;
    },
  },
  created() {
    window.addEventListener('scroll', this.receiveVisibility);
  },
  mounted() {
    this.receiveVisibility();
  },
};
