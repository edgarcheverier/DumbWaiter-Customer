import Vue from 'vue';

import Login from './containers/Login/Login.vue';
import Menu from './containers/Menu/Menu.vue';
import Welcome from './containers/Welcome/Welcome.vue';
import ListItemDetail from './components/ListItemDetail/ListItemDetail.vue';
import Cart from './containers/Cart/Cart.vue';

import User from './containers/User/User.vue';
import VueRouter from 'vue-router';
import FBSignInButton from 'vue-facebook-signin-button';

import store from './store/store.js';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(FBSignInButton);
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Login },
    { path: '/Welcome', component: Welcome },
    { path: '/User', component: User },
    { path: '/detail', component: ListItemDetail },
    { path: '/Menu', component: Menu },
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
