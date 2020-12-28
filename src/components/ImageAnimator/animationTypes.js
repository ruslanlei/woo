import anime from 'animejs';

export default {
  default: {
    scale: [
      { value: 0.98, duration: 800 },
      { value: 1, duration: 1200 },
    ],
    translateX: [
      { value: 0, duration: 1000 },
      { value: '4px', duration: 1000 },
      { value: '-4px', duration: 1000 },
      { value: 0, duration: 1000 },
    ],
    translateY: [
      { value: '-4px', duration: 1000 },
      { value: 0, duration: 1000 },
      { value: '4px', duration: 1000 },
      { value: 0, duration: 1000 },
    ],
    easing: 'easeInOutQuad',
    delay: anime.stagger(200, { grid: [1, 4], from: 'center' }),
  },
  defaultSlow: {
    scale: [
      { value: 0.98, duration: 1800 },
      { value: 1, duration: 2200 },
    ],
    translateX: [
      { value: 0, duration: 1000 },
      { value: '1px', duration: 1000 },
      { value: '-1px', duration: 1000 },
      { value: 0, duration: 1000 },
    ],
    translateY: [
      { value: '-1px', duration: 1000 },
      { value: 0, duration: 1000 },
      { value: '1px', duration: 1000 },
      { value: 0, duration: 1000 },
    ],
    easing: 'easeInOutQuad',
    delay: anime.stagger(200, { grid: [1, 4], from: 'center' }),
  },
  drop: {
    translateY: [
      { value: '-200px', duration: 0 },
      { value: 0, easing: 'easeInOutBack', duration: 1300 },
    ],
    opacity: [
      { value: 0, duration: 0 },
      { value: 1, easing: 'easeInOutQuad', duration: 700 },
    ],
    easing: 'easeOutBounce',
    delay: anime.stagger(30, { from: 'last' }),
  },
  growth: {
    scale: [
      { value: 0.9, duration: 0 },
      { value: 1, duration: 400 },
    ],
    opacity: [
      { value: 0, duration: 0 },
      { value: 1, duration: 300 },
    ],
    easing: 'easeInOutQuad',
    delay: anime.stagger(50, { from: 'center' }),
  },
};
