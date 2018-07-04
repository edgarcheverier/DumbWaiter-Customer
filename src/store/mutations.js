export const mutations = {
  Orders(state, order) {
    state.Orders.push(order);
  },
  finalOrder(state, arrayOfIds) {
    state.finalOrder = arrayOfIds;
  },
  productsOrdened(state, orders) {
    state.productsOrdened = orders;
  },
  connectionId(state, code) {
    state.connectionId = code;
  },
  cartList(state, list) {
    state.cartList = list;
  },
  restaurantKey(state, key) {
    state.restaurantKey = key;
  },
  allRestaurants(state, restaurants) {
    state.allRestaurants = restaurants;
  },
  updatePath(state, path) {
    state.navPath = path;
  },
  updatelongitude(state, value) {
    state.longitude = value;
  },
  updatelatitude(state, value) {
    state.latitude = value;
  },
  updateAmount(state, amount) {
    let currentValue = state.amount.total;
    currentValue += amount;
    state.amount.total = currentValue;
  },
  subtracAmount(state, amount) {
    let currentValue = state.amount.total;
    currentValue -= amount;
    state.amount.total = currentValue;
  },
  restartAmount(state) {
    state.amount.total = 0;
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
    state.amount.total = mappedList.reduce((a, b) => {
      return a + b;
    });
  },
  processOrder(state, info) {
    console.log(info);
  },

  shoppingList(state, info) {
    if (info.quantity == 1) {
      let product = {
        id: info.id,
        name: info.name,
        price: info.price,
      };
      state.shoppingList.push(product);
    } else {
      for (let i = 0; i < info.quantity; i++) {
        let product = {
          id: info.id,
          name: info.name,
          price: info.price,
        };
        state.shoppingList.push(product);
      }
    }
  },
  refreshShoppingList(state) {
    state.shoppingList = [];
  },
  mutateRestaurant(state, info) {
    let drinks = [];
    let desserts = [];
    let mains = [];

    let restaurantIfon = {
      name: info.name,
      photos: info.photos,
    };

    info.products.map(product => {
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
    state.restaurantId = info.id;
    state.restaurant = restaurantIfon;
    state.foodOptions = mains;
    state.drinksOptions = drinks;
    state.dessertsOptions = desserts;
  },
};
