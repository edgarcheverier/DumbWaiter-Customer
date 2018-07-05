<template>
  <div>
    <CartOrdersNav/> 
    <div 
      v-if="!Orders[0]" 
      class="NoOrdersContainer">
      <h2 class="NoOrdersTitle">You don't have any orders yet</h2>
      <button 
        class="NoOrdersButton" 
        @click="goBack">Go Back </button>
    </div>
    <div 
      v-for="(item, index) in Orders" 
      :key="index" 
      class="ordersContainer">
      <div 
        v-for="(product, index) in item.products" 
        v-if="product.count > 0"
        :key="index" 
        class="ordersInfoContainer">
        <p class="productTitle"> {{ product.name }} </p>
        <p class="productCount"> {{ product.count }} </p>
      </div>
      <div class="ordersAmountContainer">
        <p class="ordersAmount"> Total: {{ item.amount | currency }} </p>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import CartOrdersNav from './CartOrdersNav.vue';
export default {
  name: 'Orders',
  components: {
    CartOrdersNav,
  },
  computed: {
    Orders() {
      return this.$store.state.Orders; // [] of { amount: 12, products: [] }
    },
  },
  methods: {
    goBack() {
      this.$router.push('/welcome');
    },
  },
};
</script>

<style>
.ordersContainer {
  margin-top: 25px;
}
.ordersInfoContainer {
  display: flex;
  justify-content: space-between;
}
.ordersAmountContainer {
  display: flex;
  justify-content: center;
  color: #064d78;
  margin-top: 25px;
  margin-bottom: 10px;
}
.productTitle {
  margin-left: 10px;
  margin-bottom: 8px;
  color: #064d78;
}
.productCount {
  margin-right: 10px;
  margin-bottom: 8px;
  color: #064d78;
}
.NoOrdersContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.NoOrdersTitle {
  color: #eb2f06;
  margin-top: 125px;
}
.NoOrdersButton {
  background-color: #ff5555;
  border-radius: 7px;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin: 24px 2px;
  cursor: pointer;
  padding: 14px 50px;
}
</style>
