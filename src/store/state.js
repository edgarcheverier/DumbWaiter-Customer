export const state = {
  restaurant: {},
  customer: {}, // user name and id from facebook
  menuSelected: '', // Food, Drinks or Desserts for Menu Page
  itemSelected: {}, // Dish or Drink selected for the Card Page
  shoppingList: [
    {
      id: 44,
      name: 'Herb-roasted Beef Tenderloin',
      price: 17.95,
      description:
        'with Bordelaise sauce served with herb roasted new potatoes and a ragout of summer squash',
      quantity: 1,
    },
  ], // Dishes or Drinks ready to be order
  table: 10, // is ten for test is going to be added in the connection page
  foodOptions: [],
  drinksOptions: [],
  dessertsOptions: [],
};
