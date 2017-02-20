// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import {reduxStorePlugin} from 'redux-vue';

import App from './App';
import store from './store';
import router from './router'

Vue.use(reduxStorePlugin);

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
