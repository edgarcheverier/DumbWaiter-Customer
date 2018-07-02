export const state = {
  allRestaurants: [],
  longitude: 0,
  latitude: 0,
  restaurant: {},
  navPath: '',
  amount: { total: 0 },
  customer: {}, // user name and id from facebook
  menuSelected: '', // Food, Drinks or Desserts for Menu Page
  itemSelected: {}, // Dish or Drink selected for the Card Page
  shoppingList: [], // Dishes or Drinks ready to be order
  table: 10, // is ten for test is going to be added in the connection page
  foodOptions: [],
  drinksOptions: [],
  dessertsOptions: [],
};
