import Vue from 'vue';
import Vuex from 'vuex';
import gql from 'graphql-tag';

import graphqlClient from './graphql';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: {},
    restaurant: {},
    customer: {}, // user name and id from facebook
    menuSelected: '', // Food, Drinks or Desserts
    itemSelected: {}, // Dish or Drink selected for the Card Page
    shoppingList: [], // Dishes or Drinks ready to be order
    table: 10, // is ten for test is going to be added in the connection page
    foodOptions: [],
    drinksOptions: [],
    dessertsOptions: [],
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
      console.log(info);
      if (state.shoppingList.length === 0) {
        state.shoppingList.push(info);
        return;
      } else {
        if (
          state.shoppingList.filter((el, key) => {
            if (el.name == info.name) {
              state.shoppingList[key].quantity += 1;
              return true;
            }
          }).length === 0
        ) {
          state.shoppingList.push(info);
        }
      }
    },
    mutateRestaurant(state, info) {
      let drinks = [];
      let desserts = [];
      let mains = [];

      let restaurantIfon = {
        name: info.restaurant[0].description,
        photos: info.restaurant[0].photos,
      };

      info.restaurant[0].products.map(product => {
        product.categories.map(categorie => {
          if (categorie.name == 'drinks') {
            drinks.push(product);
          }
          if (categorie.name == 'desserts') {
            desserts.push(product);
          }
          if (categorie.name == 'mains') {
            mains.push(product);
          }
        });
      });
      state.test = info.restaurant[0];
      state.restaurant = restaurantIfon;
      state.foodOptions = mains;
      state.drinksOptions = drinks;
      state.dessertsOptions = desserts;
    },
  },
  actions: {
    async getDataRest({ commit }, id) {
      let response = await graphqlClient.query({
        query: gql`
          {
            restaurant(id: 1) {
              id
              name
              description
              latitude
              longitude
              photos {
                url
              }
              products {
                name
                price
                description
                categories {
                  name
                }
                photos {
                  url
                }
              }
            }
          }
        `,
        //variables: { bookId: id },
      });
      await commit('mutateRestaurant', response.data);
    },
  },
});
