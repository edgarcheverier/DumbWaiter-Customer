<template>
  <div id="navbar-container">

    <div id="navbar-content">
      <button @click="goBack">
        <ion-icon
          id="back-button"
          name="arrow-back"/>
      </button>
      <p id="price">{{ amount }} €</p>
      <button
        id="checkout-button"
        @click="goCheckout" >
      <ion-icon name="ios-card"/></button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    path() {
      return this.$store.state.navPath;
    },
    amount() {
      return this.$store.state.amount.total;
    },
  },
  methods: {
    goBack() {
      this.$router.push(this.path);
    },
    goCheckout() {
      this.$router.push('/Cart');
    },
  },
};
</script>

<style>
#navbar-container {
  top: 0;
  background-color: #fff;
  width: 100%;
  height: 50px;
  z-index: 1000;
  display: flex;
  position: sticky;
}
#navbar-content {
  width: 90%;
  margin: 0 auto;
  display: flex;
  font-weight: 700;
  font-family: Raleway;
  justify-content: space-between;
  align-items: center;
}
#back-button {
  color: #eb2f06;
  font-size: 2.1em;
  margin-left: -7px;
}
#price {
  font-weight: 600;
  color: #eb2f06;
  font-size: 1.3em;
}
#checkout-button {
  font-size: 2em;
  font-weight: 600;
  color: #eb2f06;
  margin: 8px -4px 0 0;
}
</style>
