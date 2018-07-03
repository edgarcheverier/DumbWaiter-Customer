<template>
  <div id="wrapper">
    <Navbar/>
    <WelcomeOptions/>
  </div>

</template>

<script>
import Navbar from '../Navbar/Navbar';
import WelcomeOptions from './WelcomeOptions.vue';

export default {
  name: 'Welcome',
  components: {
    Navbar,
    WelcomeOptions,
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
  beforeCreate() {
    this.$store.commit('updatePath', '/Maps');
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
      this.$refs.modal.open();
      /* this.$router.push('/Connection'); */
    } else {
      console.log(this.$store.state.restaurantKey);
    }
  },
};
</script>

<style scoped>
#wrapper {
  display: flex;
  height: 100vh;
  color: #ffffff;
  flex-direction: column;
  background-color: #0a3d62;
}

@import '../../assets/styles/global.css';
</style>
