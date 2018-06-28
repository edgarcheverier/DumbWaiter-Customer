<template>
  <div id="footer-content">
    <button id="footer-content-checkout">Go to checkout</button>
    <p id="footer-content-price">9,67 €</p>
  </div>
</template>


<script>
export default {
  name: 'Footer',
  components: {},
};
</script>

<style>
#footer-content {
  height: 50px;
  display: flex;
  font-weight: 700;
  flex-direction: row;
  align-items: center;
  font-family: Raleway;
  background-color: #0a3d62;
  justify-content: space-between;
}
#footer-content-checkout {
  color: #fff;
  margin-left: 20px;
  background: inherit;
}
#footer-content-price {
  color: #fff;
  margin-top: 0;
  margin: 0 20px;
  align-self: center;
  background-color: inherit;
}
</style>
