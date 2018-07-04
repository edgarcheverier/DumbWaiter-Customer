<template>
  <div>
    <CartOrdersNav/> 
    <div 
      v-for="(item, index) in Orders" 
      :key="index" 
      class="ordersContainer">
      <div 
        v-for="(product, index) in item.products" 
        :key="index" 
        class="ordersInfoContainer">
        <p class="productTitle"> {{ product.name }} </p>
        <p class="productCount"> {{ product.count }} </p>
      </div>
      <div class="ordersAmountContainer">
        <p class="ordersAmount"> Total: {{ item.amount }} €</p>
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
</style>
