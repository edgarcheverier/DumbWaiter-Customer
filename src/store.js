import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import gql from 'graphql-tag';

import graphqlClient from './graphql';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    restaurant: [],
    customer: {}, // user name and id from facebook
    menuSelected: '', // Food, Drinks or Desserts
    itemSelected: {}, // Dish or Drink selected for the Card Page
    shoppingList: {}, // Dishes or Drinks ready to be order
    table: 10, // is ten for test is going to be added in the connection page
    foodOptions: [
      {
        name: 'Pizza Napolitana',
        price: '12€',
        description:
          'I am a very simple card. I am good at containing small bits of information.',
        photo:
          'https://locosxlagastronomia.com/wp-content/uploads/2018/03/pizza-napolitana.jpg',
      },
      {
        name: 'Pasta Carbonara',
        price: '15€',
        description:
          'I am a very simple card. I am good at containing small bits of information.',
        photo:
          'https://pioneerwoman.files.wordpress.com/2016/04/how-to-nail-pasta-carbonara-00a.jpg',
      },
      {
        name: 'Pizza Napolitana',
        price: '12€',
        description:
          'I am a very simple card. I am good at containing small bits of information.',
        photo:
          'https://locosxlagastronomia.com/wp-content/uploads/2018/03/pizza-napolitana.jpg',
      },
      {
        name: 'Pasta Carbonara',
        price: '15€',
        description:
          'I am a very simple card. I am good at containing small bits of information.',
        photo:
          'https://pioneerwoman.files.wordpress.com/2016/04/how-to-nail-pasta-carbonara-00a.jpg',
      },
    ],
    drinksOptions: [
      {
        name: 'Guinness',
        price: '6€',
        description:
          'I am a very simple card. I am good at containing small bits of information.',
        photo:
          'https://www.guinness-storehouse.com/content/images/ygyw_images/thumbs/guinness_draught.jpg',
      },
      {
        name: 'Coca Cola',
        price: '3€',
        description:
          'I am a very simple card. I am good at containing small bits of information.',
        photo:
          'http://www.cocacolaespana.es/content/dam/journey/es/es/private/historia/love-coca-cola/2015/logo-coca-cola-lead.png',
      },
    ],
    dessertsOptions: [
      {
        name: 'Chocolate Cake',
        price: '6€',
        description:
          'I am a very simple card. I am good at containing small bits of information.',
        photo:
          'https://img.taste.com.au/LHfi_7cR/w1200-h630-cfill/taste/2016/11/flourless-chocolate-hazelnut-cake-50137-1.jpeg',
      },
      {
        name: 'Cheesecake',
        price: '6€',
        description:
          'I am a very simple card. I am good at containing small bits of information.',
        photo:
          'https://driscolls.imgix.net/-/media/assets/recipes/raspberry-cheesecake-with-grand-marnier.ashx',
      },
    ],
  },
  mutations: {
    menuSelected(state, option) {
      state.menuSelected = option;
    },
    itemSelected(state, item) {
      state.itemSelected = item;
    },
    customerInformation(state, info) {
      state.customer = info;
    },
    shoppingList(state, info) {
      state.shoppingList = info;
    },
    mutateRestaurant(state, info) {
      state.restaurant = info;
    },
  },
  actions: {
    async getDataRest({ commit }, id) {
      let response = await graphqlClient.query({
        query: gql`
          query Book($bookId: ID!) {
            book(id: $bookId) {
              id
              title
              author
              description
            }
          }
        `,
        variables: { bookId: id },
      });
      await commit('mutateRestaurant', response.data);
    },
  },
});
