<template>
  <div class="max-container">
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

    <CartPay
      :total="total"
      :shopping-list="shoppingListData"
      :dispatch-order="dispatchOrder"
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
    dispatchOrder(e) {
      e.preventDefault();
      console.log('sending order to kitchen');
      this.$store.commit('processOrder', {});
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
.max-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  display: flex;
  flex-direction: column;
  flex-flow: column;
  align-items: center;
  height: 63vh;
  width: 80%;
  background-color: yellow;
  // justify-content: flex-start;
  /* margin: 5px; */
  padding-top: 5px;
  overflow: auto;
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
