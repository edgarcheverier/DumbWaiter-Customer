import Vue from 'vue';

import Login from './containers/Login/Login.vue';
import Menu from './containers/Menu/Menu.vue';
import Card from './components/Card/Card.vue';
import Welcome from './containers/Welcome/Welcome.vue';

import User from './containers/User/User.vue';
import VueRouter from 'vue-router';
import FBSignInButton from 'vue-facebook-signin-button';

import store from './store';

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
    { path: '/Card', component: Card },
    { path: '/Menu', component: Menu },
  ],
});

new Vue({
  router,
  store,
  render: h => {
    return <router-view />;
  },
}).$mount('#app');

//, rule: function() {return store.state.authBoolean}
