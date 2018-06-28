import gql from 'graphql-tag';

import graphqlClient from '../graphql';
import { GET_RESTAURANT } from '../querys/querys';

export const actions = {
  async getDataRest({ commit }, id) {
    let response = await graphqlClient.query({
      query: gql`
        ${GET_RESTAURANT}
      `,
      //variables: { bookId: id },
    });
    await commit('mutateRestaurant', response.data);
  },
};
