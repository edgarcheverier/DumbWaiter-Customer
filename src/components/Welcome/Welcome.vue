<template>
  <div>
    <Navbar
      :user-image="userImage"
      :go-checkout="goCheckout"
      :go-to-user="goToUser"/>
    <WelcomeOptions
      :handle-click-food="handleClickFood"
      :table-button="tableButton"
      :user-key="userKey"
      :handle-click-waiter="handleClickWaiter" />
  </div>
</template>

<script>
import Navbar from '../Navbar/Navbar';
import WelcomeOptions from './WelcomeOptions.vue';
export default {
  name: 'Welcome',
  components: {
    WelcomeOptions,
    Navbar,
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
  computed: {
    userKey() {
      return this.$store.state.restaurantKey;
    },
  },
  /*
  async beforeCreate() {
    if (this.$store.state.customer.name !== undefined) {
      await this.$store.dispatch('getDataRest');
    } else {
      this.$router.push('/');
    }
  },
  */
  beforeCreate() {
    this.$store.commit('updatePath', '/Maps');
  },
  methods: {
    goCheckout() {
      console.log('on my way');
      this.$router.push('/Cart');
    },
    handleClickFood(type) {
      this.$store.commit('menuSelected', type);
      console.log(type, this.$store.state.menuSelected);
      this.$router.push('/List');
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
    tableButton() {
      if (this.$store.state.restaurantKey == 'Connect') {
        this.$router.push('/Connection');
      } else {
        console.log(this.$store.state.restaurantKey);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'Welcome.css';
</style>
