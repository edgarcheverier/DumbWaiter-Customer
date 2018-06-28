<template>
  <div>
    <CartNav
      :go-back="goBack"/>

    <div class="container">
      <ItemCart 
        v-for="(item, index) in shoppingListData"
        :key="index"
        :item="item"
        :quantity-toggle="quantityToggle"
      />
    </div>
    <div class="footer"/>
  </div>
</template>

<script>
import CartNav from './CartNav.vue';
import ItemCart from './ItemCart.vue';
export default {
  name: 'Cart',
  components: {
    CartNav,
    ItemCart,
  },
  data: function() {
    console.log(this.$store.state.foodOptions);

    return {
      shoppingListData: this.$store.state.shoppingList,
    };
  },
  computed: {},
  methods: {
    goBack() {
      this.$router.push('/Welcome');
    },
    quantityToggle(item, direction) {},
  },
};
</script>

<style lang="scss" scoped>
@import 'Cart.css';
</style>
