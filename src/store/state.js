export const state = {
  restaurant: {},
  customer: {}, // user name and id from facebook
  menuSelected: '', // Food, Drinks or Desserts for Menu Page
  itemSelected: {}, // Dish or Drink selected for the Card Page
  shoppingList: [
    {
      id: 47,
      name: 'Kansas City BBQ glazed Meatloaf',
      price: 14,
      description:
        ' with twice-baked potatoes and ratatouille',
      quantity: 1,
    },
  ], // Dishes or Drinks ready to be order
  table: 10, // is ten for test is going to be added in the connection page
  foodOptions: [],
  drinksOptions: [],
  dessertsOptions: [],
  subTotal: { total: 14 },
};
