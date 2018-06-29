export const mutations = {
  updatePath(state, path) {
    state.navPath = path;
  },
  updateAmount(state, amount) {
    let currentValue = state.amount;
    currentValue += amount;
    state.amount = currentValue;
  },
  menuSelected(state, option) {
    state.menuSelected = option;
  },
  itemSelected(state, item) {
    state.itemSelected = item;
  },
  customerInformation(state, info) {
    state.customer = info;
  },

  toggleQuantity(state, info) {
    state.shoppingList.forEach((order, index) => {
      if (order.id === info.id) {
        order.quantity += info.direction;
        if (order.quantity === 0) {
          state.shoppingList.splice(index, 1);
        }
      }
    });
  },
  calculateSubtotal(state, info) {
    let mappedList = state.shoppingList.map(order => {
      return order.price * order.quantity;
    });
    state.subTotal.total = mappedList.reduce((a, b) => {
      return a + b;
    });
    console.log(state.subTotal);
  },

  shoppingList(state, info) {
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
