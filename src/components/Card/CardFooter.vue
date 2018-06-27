<template>
  <footer>
    <div class="footer-content">
      <button class="footer-checkout">Go to checkout</button>
      <p class="footer-price">9,67 €</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CardFooter',
  components: {},
};
</script>

<style>
footer {
  display: flex;
  width: 100%;
  height: 50px;

  background-color: #0a3d62 !important;
}
.footer-content {
  display: flex;
  width: 90%;
  margin: 0 auto !important;
  justify-content: space-between;
  align-content: center;
  flex-direction: row !important;
}
.footer-checkout {
  background-color: inherit;
  color: #fff;
  font-family: Raleway;
  font-weight: 700;
  align-items: center;
}
.footer-price {
  background-color: inherit;
  color: #fff;
  font-family: Raleway;
  font-weight: 700;
  align-self: center;
  padding: 0;
  margin: 0;
}
</style>
