export const onWindowResize = (handler) => {
  window.addEventListener('resize', handler);
  window.addEventListener('orientationchange', handler);
};

export const offWindowResize = (handler) => {
  window.removeEventListener('resize', handler);
  window.removeEventListener('orientationchange', handler);
};
