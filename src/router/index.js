import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Messages from '../views/Messages'
import Profile from '../views/Profile'

const routes = [
  {path: '/', redirect: '/messages'},
  {
    path: '/messages/:id',
    name: 'messages',
    components: {
      default: Messages,
      profile: Profile,
    }
  }
];

export default new VueRouter({
  routes
})
