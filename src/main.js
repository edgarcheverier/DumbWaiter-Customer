import Vue from 'vue';

import Login from './containers/Login/Login.vue';
import List from './containers/List/List.vue';
import Welcome from './containers/Welcome/Welcome.vue';
import ListItemDetail from './components/ListItemDetail/ListItemDetail.vue';
import Cart from './containers/Cart/Cart.vue';
import VueStripeCheckout from 'vue-stripe-checkout';
import User from './containers/User/User.vue';
import VueRouter from 'vue-router';
import FBSignInButton from 'vue-facebook-signin-button';

import Overdrive from 'vue-overdrive';

import store from './store/store.js';

const options = {
  key: 'your-publishable-key',
  image: 'https://cdn.meme.am/images/100x100/15882140.jpg',
  locale: 'auto',
  currency: 'PHP',
  billingAddress: true,
  panelLabel: 'Subscribe {{amount}}',
};

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueStripeCheckout, options);
Vue.use(FBSignInButton);
Vue.use(Overdrive);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Login },
    { path: '/Welcome', component: Welcome },
    { path: '/User', component: User },
    { path: '/detail', component: ListItemDetail },
    { path: '/List', component: List },
    { path: '/Cart', component: Cart },
  ],
});

new Vue({
  router,
  store,
  render: h => {
    return <router-view />;
  },
}).$mount('#app');
