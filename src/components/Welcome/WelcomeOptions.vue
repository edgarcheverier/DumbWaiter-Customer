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


        <button @click="tableButton">
          <i class="material-icons">border_outer</i>
        </button>
        <button @click="handleClickWaiter">
          <i class="material-icons">face</i>
        </button>

      </div>
      <div class="button-label-container">
        <h3 class="userKeyClass">{{ userKey }}</h3>
        <h3>Waiter</h3>
      </div>
    </div>
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
    tableButton() {
      if (this.$store.state.restaurantKey == 'Code') {
        this.$router.push('/Connection');
      } else {
        console.log(this.$store.state.restaurantKey);
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
@import '../../assets/styles/global.css';
</style>
