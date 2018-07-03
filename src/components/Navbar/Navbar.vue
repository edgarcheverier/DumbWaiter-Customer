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
        <ion-icon name="ios-card"/>
      </button>
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
      return this.$store.state.amount.total.toPrecision(3);
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

<style scoped>
#navbar-container {
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 1000;
  display: flex;
  position: sticky;
  background-color: #fff;
}
#navbar-content {
  display: flex;
  width: 93%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  font-family: Raleway;
  color: #eb2f06;
  font-weight: 400;
  font-size: 1.5em;
}
ion-icon {
  font-size: 3.5em;
  color: #eb2f06;
  background-color: #fff;
}
</style>
