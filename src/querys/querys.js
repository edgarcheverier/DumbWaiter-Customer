const GET_RESTAURANT = `
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
      id
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
`;

const GET_RESTAURANTS = `
{
  restaurant {
    id
    name
    description
    latitude
    longitude
    photos {
      url
    }
    products {
      id
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
`;

export { GET_RESTAURANT, GET_RESTAURANTS };
