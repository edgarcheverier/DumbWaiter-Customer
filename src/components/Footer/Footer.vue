<template>
  <div id="footer-content">
    <button 
      id="footer-content-checkout" 
      @click="goToCart" >
      Go to checkout</button>
    <p id="footer-content-price">20 €</p>
  </div>
</template>


<script>
export default {
  name: 'Footer',
  components: {},
  methods: {
    goToCart() {
      this.$router.push('/Cart');
    },
  },
};
</script>

<style>
#footer-content {
  height: 50px;
  display: flex;
  font-weight: 700;
  flex-direction: row;
  align-items: center;
  background-color: #0a3d62;
  justify-content: space-between;
}
#footer-content-checkout {
  color: #fff;
  margin-left: 20px;
  font-family: Raleway;
  font-weight: 600;
  font-size: 1.1em;
}
#footer-content-price {
  color: #fff;
  margin-top: 0;
  margin: 0 20px;
  align-self: center;
  font-family: Raleway;
  font-weight: 600;
  font-size: 1.1em;
  background-color: inherit;
}
</style>
