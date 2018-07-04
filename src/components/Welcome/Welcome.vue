<template>
  <div id="wrapper">
    <WelcomeNav/>
    <WelcomeOptions/>
  </div>

</template>

<script>
import WelcomeNav from './WelcomeNav.vue';
import WelcomeOptions from './WelcomeOptions.vue';

export default {
  name: 'Welcome',
  components: {
    WelcomeNav,
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
};
</script>

<style scoped>
#wrapper {
  display: flex;
  height: 100vh;
  color: #ffffff;
  flex-direction: column;
  background-color: #ff5555;
}
@import '../../assets/styles/global.css';
</style>
