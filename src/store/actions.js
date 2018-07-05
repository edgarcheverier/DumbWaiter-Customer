import gql from 'graphql-tag';

import graphqlClient from '../graphql';
import { GET_RESTAURANTS } from '../querys/querys';
import { ON_ORDER_PRODUCT_CHANGED } from '../querys/subscriptions';

export const actions = {
  async getRestaurant({ commit }) {
    let response = await graphqlClient.query({
      query: gql`
        ${GET_RESTAURANTS}
      `,
    });
    await commit(
      'allRestaurants',
      response.data.restaurant
    );
  },

  async subscribeToProductChange({ commit }, args) {
    const subscription = ON_ORDER_PRODUCT_CHANGED(
      args.userId
    );

    graphqlClient
      .subscribe({
        query: gql`
          ${subscription}
        `,
        variables: {},
      })
      .subscribe({
        next(response) {
          if (typeof args.callback === 'function') {
            return args.callback(
              response.data.onProductOrderChanged
            );
          }
        },
      });
  },

  async submitOrder({ commit }, arg) {
    console.log('submitOrder', arg.array, arg.amount);
    let response = await graphqlClient.mutate({
      mutation: gql`
      mutation {
        createOrder(
          products: "${arg.array}"
          connectionId: ${arg.id}
          price: ${arg.amount}
        ) {
          id
          status
          products {
            product {
              name
              price
              categories {
                name
              }
            }
            price
          }
        }
      }
      `,
    });
    await commit(
      'productsOrdened',
      response.data.createOrder.products
    );
  },

  async callWaiter({ commit }, args) {
    console.log(args);
    let response = await graphqlClient.mutate({
      mutation: gql`
      mutation {
        callWaiter(
          restaurantId: ${args.restaurantId}
          tableCode: "${args.tableCode}"
        ) {
          id
          }
        }
      `,
    });
  },

  async getConnectionId({ commit }, arg) {
    let response = await graphqlClient.mutate({
      mutation: gql`
      mutation {
        addConnection(
          restaurantId: ${arg.id}
          code: "${arg.code}"
        ){
          id
        }
      }
    `,
    });
    await commit(
      'connectionId',
      response.data.addConnection.id
    );
  },

  async getLocation({ commit }, id) {
    const success = async pos => {
      let crd = pos.coords;
      await commit('updatelongitude', crd.longitude);
      await commit('updatelatitude', crd.latitude);
      console.log('latitude', crd.longitude);
      console.log('Longitude: ', crd.latitude);
      console.log(
        'More or less ' + crd.accuracy + ' meters.'
      );
    };

    function error(err) {
      console.warn(
        'ERROR(' + err.code + '): ' + err.message
      );
    }

    navigator.geolocation.getCurrentPosition(
      success,
      error
    );
  },
};
