<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <h6 class="brand-logo center">Dumbwaiter</h6>
      </div>
    </nav>
    <div class="foodDrinksContainer">
      <div class="food">
        <button 
          class="btn-floating btn-large waves-effect waves-light indigo accent-2" 
          @click="handleClickFood('Food')"><i class="material-icons">local_dining</i></button>
      </div>
      <div class="drinks">
        <button 
          class="btn-floating btn-large waves-effect waves-light indigo accent-2" 
          @click="handleClickFood('Drinks')"><i class="material-icons">local_bar</i></button>
      </div>
    </div>
    <div class="dessertsContainer">
      <div class="desserts">
        <button 
          class="btn-floating btn-large waves-effect waves-light indigo accent-2" 
          @click="handleClickFood('Desserts')"><i class="material-icons">cake</i></button>
      </div>
    </div>
    <div class="waiterContainer">
      <div class="waiter">
        <button 
          class="btn-floating btn-large waves-effect waves-light indigo accent-2" 
          @click="handleClickWaiter"><i class="material-icons">face</i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  computed: {},
  methods: {
    handleClickFood(type) {
      this.$store.commit('menuSelected', type);
      this.$router.push('/Menu');
    },
    handleClickWaiter: () => {
      console.log('Waiter');
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'Welcome.css';
</style>
