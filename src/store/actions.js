import gql from 'graphql-tag';

import graphqlClient from '../graphql';
import {
  GET_RESTAURANT,
  GET_RESTAURANTS,
} from '../querys/querys';

export const actions = {
  async getRestaurant({ commit }) {
    let response = await graphqlClient.query({
      query: gql`
        ${GET_RESTAURANTS}
      `,
    });
    await console.log(
      'restaurants!!!',
      response.data.restaurant
    );
    await commit(
      'allRestaurants',
      response.data.restaurant
    );
  },
  /*
  async getDataRest({ commit }, id) {
    let response = await graphqlClient.query({
      query: gql`
        ${GET_RESTAURANT}
      `,
      //variables: { bookId: id },
    });
    console.log('restaurant!!!', response.data);
    await commit('mutateRestaurant', response.data);
  },
  */
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
