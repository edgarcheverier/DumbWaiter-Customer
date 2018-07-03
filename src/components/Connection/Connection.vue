<template>
  <div>
    <Navbar />
    <div class="fromContainer">
      <input 
        placeholder="Enter the key please"
        class="inputClass"
        type="text" 
        @keyup="handlerInput">
      <button 
        class="buttonClass" 
        @click="triggerConnection">Connect Now</button>
    </div>
  </div>
</template>

<script>
import Navbar from '../Navbar/Navbar.vue';

export default {
  name: 'Connection',
  components: {
    Navbar,
  },
  data: function() {
    return {
      key: '',
      restaurantId: this.$store.state.restaurantId,
    };
  },
  beforeCreate() {
    this.$store.commit('updatePath', '/Welcome');
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
      this.$router.push('/Welcome');
    },
  },
};
</script>

<style scoped>
.fromContainer {
  margin-top: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.buttonClass {
  border: 0.5px solid white;
  background-color: white;
  font-size: 15px;
  margin-top: 20px;
  padding: 5px 30px;
  color: black;
}
.inputClass {
  padding: 7px 50px;
}
</style>
