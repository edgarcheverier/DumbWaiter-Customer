export const mutations = {
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
            state.shoppingList[key].quantity = 1;
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
};
