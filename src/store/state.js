export const state = {
  finalOrder: [],
  productsOrdened: [],
  restaurantId: 0, // restaurant id
  restaurantKey: 'Connect', // restaurant code
  connectionId: Number, // code after the connection
  shoppingList: [], // from ListItem id, quantity, name, price
  cartList: [], // from Cart
  allRestaurants: [],
  longitude: 0,
  latitude: 0,
  restaurant: {},
  navPath: '',
  amount: { total: 0 },
  customer: {}, // user name and id from facebook
  menuSelected: '', // Food, Drinks or Desserts for Menu Page
  itemSelected: {}, // Dish or Drink selected for the Card Page
  table: 10, // is ten for test is going to be added in the connection page
  foodOptions: [],
  drinksOptions: [],
  dessertsOptions: [],
};
