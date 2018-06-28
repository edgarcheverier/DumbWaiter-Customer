<template>
  <div>
    <CartNav
    :go-back="goBack"/>

    <h1>Lars</h1>



  </div>
</template>

<script>
import CartNav from './CartNav.vue';
export default {
  name: 'Cart',
  components: {
    CartNav,
  },
  data: function() {
    console.log(
      'shopping list',
      this.$store.state.shoppingList
    );
    return {
      shoppingListData: this.$store.state.shoppingList,
    };
  },
  computed: {},
  methods: {
    goBack() {
      this.$router.push('/Welcome');
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'Cart.css';
</style>
