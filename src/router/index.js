import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Messages from '../views/Messages'


const routes = [
  {path: '/', redirect: '/messages'},
  {
    path: '/messages/:id',
    name: 'messages',
    component: Messages
  }
]

export default new VueRouter({
  routes
})

