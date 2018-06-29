<template>
  <div>
    <CartNav
      :go-back="goBack"
      :go-checkout="goCheckout"
    />

    <div class="container">
      <ItemCart
        v-for="(item, index) in shoppingListData"
        :key="index"
        :item="item"
        :quantity-toggle="quantityToggle"
        :sub-total="subTotal"
      />
    </div>
    <div class="footer"/>
    <CartPay
      :total="total"
    />


  </div>
</template>

<script>
import CartNav from './CartNav.vue';
import ItemCart from './ItemCart.vue';
import CartPay from './CartPay.vue';
export default {
  name: 'Cart',
  components: {
    CartNav,
    CartPay,
    ItemCart,
  },
  data: function() {
    console.log(this.$store.state.foodOptions);
    return {
      shoppingListData: this.$store.state.shoppingList,
      total: this.$store.state.subTotal,
    };
  },
  computed: {},
  methods: {
    goBack() {
      this.$router.push('/Welcome');
    },
    goCheckout() {},
    subTotal() {
      this.$store.commit('calculateSubtotal', {});
    },
    quantityToggle(id, direction) {
      this.$store.commit('toggleQuantity', {
        id,
        direction,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  font-size: 16px;
  background-color: #82ccdd;
}
.container {
  display: flex;
  height: 60vh;
  width: 80%;
  background-color: white;
  /* margin: 5px; */
  padding-top: 5px;
}
.footer {
  margin: 6vh;
  height: 15vh;
  width: 80%;
  background-color: white;
}

.titlecontainer {
  margin-bottom: 5rem;
}

.foodDrinksContainer {
  display: flex;
  justify-content: space-around;
}

.buttonsLabel {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.labelClass {
  font-size: 1.3rem;
  margin-top: 1rem;
  color: white;
}

.dessertsContainer {
  display: flex;
  justify-content: center;
  margin: 5rem;
}

.waiterContainer {
  display: flex;
  justify-content: flex-end;
  margin-top: 3.5rem;
  margin-right: 1rem;
}

.btn-floating.btn-large {
  width: 6rem;
  height: 6rem;
}

.btn-floating.btn-large i {
  line-height: 6rem;
  font-size: 2.5rem;
}

a.btn-floating.btn-large.waves-effect.waves-light.imageTag {
  width: 3rem;
  height: 3rem;
  margin-left: 0.5rem;
}

.cyan {
  background-color: #6a89cc !important;
  border-color: #6a89cc !important;
}
html {
  font-size: 16px;
  background-color: #bbdefb;
}

.titlecontainer {
  margin-bottom: 5rem;
}

.foodDrinksContainer {
  display: flex;
  justify-content: space-around;
}

.buttonsLabel {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.labelClass {
  font-size: 1.3rem;
  margin-top: 1rem;
  color: white;
}

.dessertsContainer {
  display: flex;
  justify-content: center;
  margin: 3rem;
}

.waiterContainer {
  display: flex;
  justify-content: space-between;
  margin-top: 3.5rem;
  margin-right: 1rem;
  margin-left: 1rem;
}

.tableContainer {
  display: flex;
  justify-content: flex-start;
  margin-top: 3.5rem;
  margin-right: 1rem;
}

.btn-floating.btn-large {
  width: 6rem;
  height: 6rem;
}

.btn-floating.btn-large i {
  line-height: 6rem;
  font-size: 2.5rem;
}

a.btn-floating.btn-large.waves-effect.waves-light.imageTag {
  width: 3rem;
  height: 3rem;
  margin-left: 0.5rem;
}

.cyan {
  background-color: #5f8cee !important;
  border-color: #6a89cc !important;
}
form {
  width: 300px;
  margin: 0 auto;
  text-align: center;
  padding-top: 50px;
}

.value-button {
  display: inline-block;
  border: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  padding: 11px 0;
  background: #eee;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.value-button:hover {
  cursor: pointer;
}

form #decrease {
  margin-right: -4px;
  border-radius: 8px 0 0 8px;
}

form #increase {
  margin-left: -4px;
  border-radius: 0 8px 8px 0;
}

form #input-wrap {
  margin: 0px;
  padding: 0px;
}

.quantity {
  text-align: center;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 40px;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
