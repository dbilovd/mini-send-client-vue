import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const SendMessage = require('../components/SendMessage.vue').default;
const Messages = require('../components/Messages.vue').default;
const MessageDetails = require('../components/MessageDetails.vue').default;
const Dashboard = require('../components/Dashboard.vue').default;

const routes = [
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: '/messages',
    component: Messages,
  },
  {
    path: '/messages/:messageId',
    component: MessageDetails,
  },
  {
    path: '/messages/to/:recipient',
    component: Messages,
    props: (route) => route.params,
  },
  {
    path: '/send-message',
    component: SendMessage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
