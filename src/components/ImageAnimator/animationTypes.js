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
  dropTestimonials: {
    translateX: [
      { value: '-10px', duration: 0 },
      { value: 0, easing: 'easeInOutBack', duration: 1300 },
    ],
    translateY: [
      { value: '-10px', duration: 0 },
      { value: 0, easing: 'easeInOutBack', duration: 1300 },
    ],
    opacity: [
      { value: 0, duration: 0 },
      { value: 1, easing: 'easeInOutQuad', duration: 1300 },
    ],
    easing: 'easeOutBounce',
    delay: anime.stagger(100, { from: 'last' }),
  },
  slideIn: {
    translateY: [
      { value: '40px', duration: 0 },
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
  flashes: {
    scale: [
      { value: 0.98 },
      { value: 1 },
    ],
    opacity: [
      { value: 0.4 },
      { value: 1 },
      { value: 0.4 },
      { value: 1 },
      { value: 0.4 },
      { value: 1 },
      { value: 0.4 },
      { value: 1 },
      { value: 0.4 },
      { value: 1 },
    ],
    translateX: [
      { value: 0 },
      { value: '10px' },
      { value: '-10px' },
      { value: 0 },
    ],
    translateY: [
      { value: '-10px' },
      { value: 0 },
      { value: '10px' },
      { value: 0 },
    ],
    duration: 12000,
    easing: 'easeInOutCirc',
    delay: anime.stagger(1000, { grid: [3, 2], from: 'first' }),
  },
  flashesTestimonials: {
    scale: [
      { value: 0.99 },
      { value: 1 },
    ],
    opacity: [
      { value: 0.7 },
      { value: 1 },
      { value: 0.7 },
      { value: 1 },
      { value: 0.7 },
      { value: 1 },
      { value: 0.7 },
      { value: 1 },
      { value: 0.7 },
      { value: 1 },
    ],
    translateX: [
      { value: 0 },
      { value: '6px' },
      { value: '-6px' },
      { value: 0 },
    ],
    translateY: [
      { value: '-6px' },
      { value: 0 },
      { value: '6px' },
      { value: 0 },
    ],
    duration: 14000,
    easing: 'easeInOutCirc',
    delay: anime.stagger(1000, { grid: [3, 2], from: 'first' }),
  },
};
