<template>
  <div id="wrapper">
    <div class="button-container">
      <div class="button-btn-container">
        <button @click="handleClickFood('Food')">
          <i class="material-icons">local_dining</i>
        </button>
        <button @click="handleClickFood('Drinks')">
          <i class="material-icons">local_bar</i>
        </button>
      </div>
      <div class="button-label-container">
        <h3>Food</h3>
        <h3>Drinks</h3>
      </div>
    </div>
    <div class="button-container">
      <div class="button-btn-container btn-solo">
        <button @click="handleClickFood('Desserts')">
          <i class="material-icons">cake</i>
        </button>
      </div>
      <div class="button-label-container label-solo">
        <h3>Dessert</h3>
      </div>
    </div>
    <div class="button-container">
      <div class="button-btn-container">
        <button @click="goToOrders">
          <i class="material-icons">border_outer</i>
        </button>
        <button @click="handleClickWaiter">
          <i class="material-icons">face</i>
        </button>
      </div>
      <div class="button-label-container">
        <h3 class="OrdersClass">Orders</h3>
        <h3 class="WaiterClass">Waiter</h3>
      </div>
    </div>
    <div 
      class="CodeContainer" 
      @click="tableButton">
      <h3 class="userKeyClass">{{ userKey }}</h3>
    </div>
    <sweet-modal
      ref="connect"
      :enable-mobile-fullscreen="false"
    >
      <div id="modal-wrapper">
        <div id="connect-name">
          <h3>Welcome!</h3>
        </div>
        <div id="connect-input-container">
          <form action="submit">
            <input 
              id="connect-input"
              type="text" 
              placeholder="please insert your code" 
              @keyup="handleInput">
            <button 
              id="connect-button" 
            >Connect</button>
          </form>
        </div>
      </div>
    </sweet-modal>

  </div>
</template>

<script>
export default {
  name: 'WelcomeOptions',
  data: function() {
    return {
      userImage: {
        backgroundImage: `url(http://graph.facebook.com/${
          this.$store.state.customer.id
        }/picture)`,
      },
      userTable: this.$store.state.table,
    };
  },
  computed: {
    userKey() {
      return this.$store.state.restaurantKey;
    },
  },
  methods: {
    goCheckout() {
      console.log('on my way');
      this.$router.push('/cart');
    },
    handleClickFood(type) {
      this.$store.commit('menuSelected', type);
      console.log(type, this.$store.state.menuSelected);
      this.$router.push('/list');
    },
    goToUser() {
      this.$router.push('/user');
    },
    handleClickWaiter() {
      this.$store.dispatch('callWaiter', {
        restaurantId: this.$store.state.restaurantId,
        tableCode: this.$store.state.restaurantKey,
      });
      this.$toast('The Waiter Is Comming :)', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 2000,
      });
    },
    goToOrders() {
      this.$router.push('/Orders');
    },
    tableButton() {
      if (this.$store.state.restaurantKey == 'Code') {
        this.$refs.connect.open();
      } else {
          this.$toast(
          `this: ${
            this.$store.state.restaurantKey
          } is the reference of your table`,
          {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 2000,
          }
        );
      }
    },
  },
};
</script>

<style scoped>
#wrapper {
  width: 80%;
  margin: 0 auto;
}
i {
  font-size: 5em;
  color: #ffffff;
}
button {
  border-radius: 15px;
  width: 8em;
  height: 8em;
  border: 0;
  background-color: inherit;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1),
    0 6px 6px rgba(0, 0, 0, 0.1);
}
h3 {
  font-weight: 300;
  font-size: 1.4em;
  margin: 0.5em 0;
}
.button-container {
  display: flex;
  margin-top: 2em;
  flex-direction: column;
}
.button-btn-container {
  display: flex;
  justify-content: space-between;
}
.button-label-container {
  width: 87%;
  display: flex;
  margin-left: 1.4em;
  flex-direction: row;
  justify-content: space-between;
}
.btn-solo,
.label-solo {
  display: flex;
  justify-content: center;
}
#modal-wrapper {
  width: 100%;
  display: flex;
  margin: 0 auto;
  text-align: left;
  flex-direction: column;
}
#connect-name {
  text-align: center;
  margin-bottom: 10px;
  color: #ff5555;
}
#connect-input {
  height: 40px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  border: 1px solid #ff5555;
  border-radius: 4px;
}
#connect-button {
  width: 100%;
  height: 40px;
  font-weight: 600;
  font-size: 0.9em;
  color: #ffffff;
  font-family: Raleway;
  background-color: #ff5555;
  border: 1px #ff5555 solid;
  border-radius: 0;
  margin-top: 20px !important;
}
input {
  text-indent: 10px;
  font-family: Merriweather;
  font-size: 0.8;
}
input:focus {
  outline: none;
}
.OrdersClass {
  margin-left: -10px;
}
.CodeContainer {
  display: flex;
  justify-content: center;
  border-radius: 15px;
  padding: 5px 10px;
  margin-top: 15px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1),
    0 6px 6px rgba(0, 0, 0, 0.1);
}
 {
  color: #ff5555 !important;
  background-color: #ffffff !important;
}
@import '../../assets/styles/global.css';
</style>
