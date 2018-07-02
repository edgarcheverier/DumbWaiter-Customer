<template>
  <div>
    <Navbar />
    <div class="listContainer">
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
      />


    </div>
  </div>
</template>

<script>
import ItemCart from './ItemCart.vue';
import CartPay from './CartPay.vue';
import Navbar from '../../components/Navbar/Navbar.vue';
export default {
  name: 'Cart',
  components: {
    Navbar,
    CartPay,
    ItemCart,
  },
  data: function() {
    return {
      shoppingListData: [],
      total: this.$store.state.subTotal,
    };
  },
  computed: {},
  beforeCreate() {
    this.shoppingListData = this.$store.state.shoppingList;
    this.total = this.$store.state.amount.total;
    console.log(
      'current order:',
      this.$store.state.shoppingList
    );
    console.log(
      'current total:',
      this.$store.state.amount.total
    );
  },
  methods: {},
};
</script>

<style>
</style>
