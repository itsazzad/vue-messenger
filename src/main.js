// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { reduxStorePlugin } from 'redux-vue';
import Vue from 'vue';
import App from './App';

// install redux-vue
Vue.use(reduxStorePlugin);

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app');
