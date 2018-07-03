<template>
  <div id="wrapper">
    <div class="button-container">
      <div class="button-btn-container">
        <button @click="props.handleClickFood('Food')">
          <i class="material-icons">local_dining</i>
        </button>    
        <button @click="props.handleClickFood('Drink')">
          <i class="material-icons">local_bar</i>
        </button>
      </div>
      <div class="button-label-container">
        <h3>Food</h3>
        <h3>Drinks</h3>
      </div>
    </div>
    <div class="button-container">
      <div class="button-btn-container btn-solo">
        <button @click="props.handleClickFood('Dessert')">
          <i class="material-icons">cake</i>
        </button>
      </div>
      <div class="button-label-container label-solo">
        <h3>Dessert</h3>
      </div>
    </div>
    <div class="button-container">
      <div class="button-btn-container">
        <button>
          <i class="material-icons">border_outer</i>
        </button>    
        <button>
          <i class="material-icons">face</i>
        </button>
      </div>
      <div class="button-label-container">
        <h3>Connect</h3>
        <h3>Waiter</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeOptions',
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
  beforeCreate() {
    this.$store.commit('updatePath', '/maps');
  },
  methods: {
    goCheckout() {
      console.log('on my way');
      this.$router.push('/cart');
    },
    handleClickFood(type) {
      this.$store.commit('menuSelected', type);
      console.log(type, this.$store.state.menuSelected);
      this.$router.push('/list');
    },
    goToUser() {
      this.$router.push('/user');
    },
    handleClickWaiter: () => {
      M.toast({
        html: 'The Waiter Is Coming :)',
        classes: 'rounded',
      });
    },
    tableButton: () => {
      M.toast({
        html: 'Your orders will arrive here',
        classes: 'rounded',
      });
    },
  },
};
</script>

<style scoped>
#wrapper {
  width: 80%;
  margin: 0 auto;
}
i {
  font-size: 5em;
  color: #ffffff;
}
button {
  width: 9em;
  height: 9em;
  border: 0;
  background-color: inherit;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15),
    0 6px 6px rgba(0, 0, 0, 0.23);
}
h3 {
  font-weight: 300;
  font-size: 1.4em;
  margin: 0.5em 0;
}
.button-container {
  display: flex;
  margin-top: 2em;
  flex-direction: column;
}
.button-btn-container {
  display: flex;
  justify-content: space-between;
}
.button-label-container {
  width: 87%;
  display: flex;
  margin-left: 1.4em;
  flex-direction: row;
  justify-content: space-between;
}
.btn-solo,
.label-solo {
  display: flex;
  justify-content: center;
}
@import '../../assets/styles/global.css';
</style>
