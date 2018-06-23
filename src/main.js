import Vue from 'vue';
import App from './App.vue';
import Login from './containers/Login/Login.vue';
import Menu from './containers/Menu/Menu.vue';
import Card from './components/Card/Card.vue';
import Welcome from './containers/Welcome/Welcome.vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: App },
    { path: '/Login', component: Login },
    { path: '/Welcome', component: Welcome },
    { path: '/Card', component: Card },
    { path: '/Menu', component: Menu },
  ],
});

new Vue({
  router,
  render: h => {
    return <router-view />;
  },
}).$mount('#app');
