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

export { GET_RESTAURANT };
