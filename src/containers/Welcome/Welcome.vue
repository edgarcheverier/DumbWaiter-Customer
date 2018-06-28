<template>
  <div>
    <welcomeNav 
      :user-image="userImage" 
      :go-to-user="goToUser"/>
    <WelcomeOptions 
      :handle-click-food="handleClickFood" 
      :table-button="tableButton" 
      :user-table="userTable" 
      :handle-click-waiter="handleClickWaiter" />
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
      userTable: this.$store.state.table,
    };
  },
  computed: {},
  async beforeCreate() {
    if (this.$store.state.customer.name !== undefined) {
      await this.$store.dispatch('getDataRest');
    } else {
      this.$router.push('/');
    }
  },
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
    tableButton: () => {
      M.toast({
        html: 'Your ordeners will arrive here',
        classes: 'rounded',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'Welcome.css';
</style>
