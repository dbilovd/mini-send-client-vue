import Vue from 'vue';
import VuePortal from 'portal-vue';
import App from './App.vue';
import mixin from './app.mixin';
import router from './router';
import store from './store';
import API from './services/api';

Vue.config.productionTip = false;

Vue.use(VuePortal, {
  selector: '#portal-header',
});

Vue.prototype.$api = API;

Vue.mixin(mixin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
