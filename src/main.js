import Vue from 'vue';
import VModal from 'vue-js-modal';
import VueRouter from 'vue-router';

import Maps from './components/Maps/Maps.vue';
import List from './components/List/List.vue';
import Cart from './components/Cart/Cart.vue';
import Orders from './components/Cart/CartOrders.vue';
import User from './components/User/User.vue';
import Login from './components/Login/Login.vue';
import VueStripeCheckout from 'vue-stripe-checkout';
import Welcome from './components/Welcome/Welcome.vue';
import Connection from './components/Connection/Connection.vue';

import FBSignInButton from 'vue-facebook-signin-button';
import * as VueGoogleMaps from 'vue2-google-maps';
import Toast from 'vue-easy-toast';
import VueSweetalert2 from 'vue-sweetalert2';
import VueCurrencyFilter from 'vue-currency-filter';

import store from './store/store.js';
import googleKey from './../google.api.key';

import SweetModal from 'sweet-modal-vue/src/plugin.js';

const options = {
  key: 'pk_test_fLPmqxecZJczNSmVGLv3YN1c',
  image: '',
  locale: 'auto',
  currency: 'Euro',
  billingAddress: true,
  panelLabel: 'Subscribe {{amount}}',
};

Vue.use(VueGoogleMaps, {
  load: {
    key: googleKey,
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
});
Vue.config.productionTip = false;
Vue.use(VModal);
Vue.use(VueRouter);
Vue.use(VueStripeCheckout, options);
Vue.use(FBSignInButton);
Vue.use(SweetModal);
Vue.use(Toast);
Vue.use(VueSweetalert2);
Vue.use(VueCurrencyFilter, {
  symbol: '€',
  thousandsSeparator: ',',
  fractionCount: 2,
  fractionSeparator: '.',
  symbolPosition: 'back',
  symbolSpacing: true,
});

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Login },
    { path: '/maps', component: Maps },
    { path: '/welcome', component: Welcome },
    { path: '/connection', component: Connection },
    { path: '/user', component: User },
    { path: '/list', component: List },
    { path: '/cart', component: Cart },
    { path: '/orders', component: Orders },
  ],
});

new Vue({
  router,
  store,
  render: h => {
    return <router-view />;
  },
}).$mount('#app');
