import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './containers/Login/Login.vue';
import Menu from './containers/Menu/Menu.vue';
import Card from './components/Card/Card.vue';
import Welcome from './containers/Welcome/Welcome.vue';

import store from './store';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/Login', component: Login },
    { path: '/Welcome', component: Welcome },
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
