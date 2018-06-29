<template>
  <div id="navbar-container">
    <button @click="goBack">
      <ion-icon 
        id="back-button" 
        name="arrow-back"/>
    </button>
    <p id="price">20 €</p>
    <button 
      id="checkout-button" >
    <ion-icon name="ios-card"/></button>
 
  </div>
  
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    goBack() {
      this.$router.push('/Welcome');
    },
  },
};
</script>

<style>
#navbar-container {
  top: 0;
  height: 50px;
  z-index: 1000;
  display: flex;
  position: sticky;
  font-weight: 700;
  flex-direction: row;
  font-family: Raleway;
  background-color: #fff;
  justify-content: space-between;
}
#back-button {
  color: #eb2f06;
  font-size: 2.1em;
  margin-left: 12px;
}
#price {
  font-weight: 600;
  color: #eb2f06;
  font-size: 1.3em;
  align-self: center;
}
#checkout-button {
  font-size: 2em;
  font-weight: 600;
  color: #eb2f06;
  margin-right: 15px;
}
</style>
