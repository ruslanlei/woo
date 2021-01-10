/* eslint-disable */
const constants = {
  mobile: 480,
  subTablet: 768,
  tablet: 992,
  desktop: 1287,
}

const breakpointsData = {
  mobile: [0, +constants.mobile],
  subTablet: [+constants.mobile + 1, +constants.subTablet],
  tablet: [+constants.subTablet + 1, +constants.tablet],
  desktop: [+constants.tablet + 1, +constants.desktop],
  wide: [+constants.desktop + 1],
};

const bps = Object.entries(breakpointsData);
bps.sort(([, [a]], [, [b]]) => a - b);

const breakpointsOrder = bps.map(([key]) => key);

const state = () => ({
  breakpoint: 'lg',
});

const isBp = (bp) => ({ breakpoint }) => breakpoint === bp;
const isTighterThanBp = (bp) => ({ breakpoint }) => breakpointsOrder.indexOf(breakpoint) < breakpointsOrder.indexOf(bp);
const isWiderThanBp = (bp) => ({ breakpoint }) => breakpointsOrder.indexOf(breakpoint) > breakpointsOrder.indexOf(bp);
const isBpOrTighter = (bp) => (state) => isBp(bp)(state) || isTighterThanBp(bp)(state);
const isBpOrWider = (bp) => (state) => isBp(bp)(state) || isWiderThanBp(bp)(state);

const getters = {
  isMobile: isBp('mobile'),
  isWiderThanMobile: isTighterThanBp('mobile'),

  isSubTablet: isBp('subTablet'),
  isSubTabletOrTighter: isBpOrTighter('subTablet'),
  isSubTabletOrWider: isBpOrWider('subTablet'),
  isTighterThanSubTablet: isTighterThanBp('subTablet'),
  isWiderThanSubTablet: isTighterThanBp('subTablet'),

  isTablet: isBp('tablet'),
  isTabletOrTighter: isBpOrTighter('tablet'),
  isTabletOrWider: isBpOrWider('tablet'),
  isTighterThanTablet: isTighterThanBp('tablet'),
  isWiderThanTablet: isWiderThanBp('tablet'),

  isDesktop: isBp('desktop'),
  isDesktopOrTighter: isBpOrTighter('desktop'),
  isDesktopOrWider: isBpOrWider('desktop'),
  isTighterThanDesktop: isTighterThanBp('desktop'),
  isWiderThanDesktop: isTighterThanBp('desktop'),
};

const mutations = {
  setLayoutBreakpoint(state, breakpoint) {
    state.breakpoint = breakpoint;
  },
};

const actions = {
  handleLayoutBreakpoint({ state, commit }) {
    const { innerWidth } = window;

    const matchingBreakpoints = bps.filter(([, [min, max]]) => (
      innerWidth >= (min || 0)
      && (max ? (innerWidth <= max) : !max)
    ));

    const breakpoint = matchingBreakpoints[0][0];

    if (breakpoint === state.breakpoint) {
      return;
    }

    commit('setLayoutBreakpoint', matchingBreakpoints[0][0]);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
