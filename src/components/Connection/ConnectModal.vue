<template>
  <sweet-modal ref="connect">
    <h3>{{ name }}</h3>
    <form action="submit">
      <input 
        type="text" 
        placeholder="please insert your code" 
        @keyup="handleInput">
      <button @click="triggerConnection">Connect Now</button>
    </form>
  </sweet-modal>
</template>

<script>
export default {
  name: 'ConnectModal',
  data: function() {
    return {
      key: '',
      restaurantId: this.$store.state.restaurantId,
    };
  },
  beforeCreate() {
    if (!this.$store.state.customer.id) {
      this.$router.push('/');
    }
  },
  methods: {
    handlerInput(e) {
      this.key = e.target.value.toUpperCase();
    },
    triggerConnection() {
      console.log(this.key, this.restaurantId);
      this.$store.commit('restaurantKey', this.key);
      this.$store.dispatch('getConnectionId', {
        id: this.restaurantId,
        code: this.key,
      });
      this.$router.push('/welcome');
    },
  },
};
</script>

<style scoped>
</style>
