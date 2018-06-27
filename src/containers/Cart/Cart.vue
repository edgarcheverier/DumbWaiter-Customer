<template>
<div>
  <CartNav :go-back="goBack" />

  <h1>Lars</h1>
  <!--
  <div class="waiterContainer">
    <div class="buttonsLabel">
      <button class="btn-floating btn-large waves-effect waves-light z-depth-4 blue lighten-1" @click="props.tableButton"><i class="material-icons">border_outer</i></button>
      <label class="labelClass">Table Nº {{ props.userTable }}</label>
    </div>
    <div class="buttonsLabel">
      <button class="btn-floating btn-large waves-effect waves-light z-depth-4  teal accent-4 lighten-1" @click="props.handleClickWaiter"><i class="material-icons">face</i></button>
      <label class="labelClass">Waiter</label>
    </div>
  </div> -->

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
