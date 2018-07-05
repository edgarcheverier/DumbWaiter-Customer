<template>
  <div>
    <ConnectionNav />
    <div class="fromContainer">
      <input
        placeholder="Insert Your Code Please"
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
import ConnectionNav from './ConnectionNav.vue';
export default {
  name: 'Connection',
  components: {
    ConnectionNav,
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
      this.$store.commit('restaurantKey', this.key);
      this.$store.dispatch('getConnectionId', {
        id: this.restaurantId,
        code: this.key,
      });
      const user = JSON.parse(localStorage.getItem('user'));
      const subscribe = this.$store.dispatch(
        'subscribeToProductChange',
        {
          userId: user.id,
          callback: data => {
            const status = data.productStatus;
            this.$toast(
              `Your product has change status to
                ${status}`,
              {
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
                duration: 4000,
              }
            );
          },
        }
      );
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
  background-color: #ff5555;
  border-radius: 7px;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin: 24px 2px;
  cursor: pointer;
  padding: 14px 50px;
}
.inputClass {
  border-radius: 7px;
  text-align: center;
  padding: 15px 85px;
  border: solid 0.5px black;
  font-size: 17px;
}
</style>
