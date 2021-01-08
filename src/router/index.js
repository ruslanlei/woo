import Vue from 'vue';
import VueRouter from 'vue-router';

import Dev from '@/views/Dev.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'mainLayout',
    },
  },
  {
    path: '/dev',
    name: 'Dev',
    component: Dev,
    meta: {
      layout: 'DefaultLayout',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
