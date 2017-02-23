import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Messages from '../views/Messages'
import Conversation from '../views/Conversation'
import Profile from '../views/Profile'

const routes = [
  {
    path: '/',
    redirect: '/messages'
  },
  {
    path: '/messages',
    component: Messages
  },
  {
    path: '/messages/:id',
    name: 'conversation',
    components: {
      default: Conversation,
      profile: Profile,
    }
  }
];

export default new VueRouter({
  routes
})
