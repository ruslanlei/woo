/* eslint-disable */
import Vue from 'vue';

import './assets/scss/quasar/quasar.scss';
import '@quasar/extras/material-icons/material-icons.css';
import { Quasar, QBtn, QExpansionItem, QList } from 'quasar';

Vue.use(Quasar, {
  config: {},
  plugins: {
    QBtn,
    QExpansionItem,
    QList,
  },
});
