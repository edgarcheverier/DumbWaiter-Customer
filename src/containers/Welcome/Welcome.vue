<template>
  <div>
    <welcomeNav 
      :user-image="userImage" 
      :go-to-user="goToUser"/>
    <div class="foodDrinksContainer">
      <div class="buttonsLabel">
        <button 
          class="btn-floating btn-large waves-effect waves-light cyan z-depth-4" 
          @click="handleClickFood('Food')"><i class="material-icons">local_dining</i></button>
        <label class="labelClass">Food</label>
      </div>
      <div class="buttonsLabel">
        <button 
          class="btn-floating btn-large waves-effect waves-light cyan z-depth-4" 
          @click="handleClickFood('Drinks')"><i class="material-icons">local_bar</i></button>
        <label class="labelClass">Drinks</label>
      </div>
    </div>
    <div class="dessertsContainer">
      <div class="buttonsLabel">
        <button 
          class="btn-floating btn-large waves-effect waves-light cyan z-depth-4" 
          @click="handleClickFood('Desserts')"><i class="material-icons">cake</i></button>
        <label class="labelClass">Desserts</label>
      </div>
    </div>
    <div class="waiterContainer">
      <div class="buttonsLabel">
        <button 
          class="btn-floating btn-large waves-effect waves-light z-depth-4" 
          @click="handleClickWaiter"><i class="material-icons">face</i></button>
        <label class="labelClass">Waiter</label>
      </div>
    </div>
  </div>
</template>

<script>
import WelcomeNav from './WelcomeNav.vue';
export default {
  name: 'Welcome',
  components: {
    WelcomeNav,
  },
  data: function() {
    return {
      userImage: {
        backgroundImage: `url(http://graph.facebook.com/${
          this.$store.state.customer.id
        }/picture)`,
      },
    };
  },
  computed: {},
  methods: {
    handleClickFood(type) {
      this.$store.commit('menuSelected', type);
      this.$router.push('/Menu');
    },
    goToUser() {
      this.$router.push('/User');
    },
    handleClickWaiter: () => {
      M.toast({
        html: 'The Waiter Is Coming :)',
        classes: 'rounded',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'Welcome.css';
</style>
