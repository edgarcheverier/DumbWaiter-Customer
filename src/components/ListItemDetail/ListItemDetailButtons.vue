<template>
  <div id="list-item-detail-buttons-container">
    <button 
      id="order-button" 
      @click="handleClick">Order</button>
    <p id="count-tracker">Count: {{ quantity }}</p>
    <div>
      <button 
        id="count-increase" 
        @click="substract">
        <i class="tiny material-icons">remove</i>
      </button>
      <button 
        id="count-decrease" 
        @click="add">
        <i class="tiny material-icons">add</i>
      </button> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListiItemDetailButtons',
  component: {},
  data: function() {
    return {
      itemSelected: this.$store.state.itemSelected,
      quantity: 1,
    };
  },
  methods: {
    add() {
      this.quantity++;
    },
    substract() {
      if (this.quantity >= 2) {
        this.quantity--;
      }
    },
    handleClick() {
      this.itemSelected.quantity = this.quantity;
      this.$store.commit('shoppingList', this.itemSelected);
      console.log(
        'before to go to the cart',
        this.itemSelected
      );
      this.$router.push('/detail');
    },
  },
};
</script>

<style>
#list-item-detail-buttons-container {
  width: 90%;
  display: flex;
  align-items: center;
  margin: 0 auto !important;
  flex-direction: row-reverse;
  justify-content: space-between;
}
#order-button {
  width: 80px;
  height: 40px;
  color: #fff;
  font-weight: 700;
  margin-left: 40px;
  border-radius: 4px;
  font-family: Raleway;
  background: #0a3d62;
}
#count-tracker {
  font-size: 0.8em;
  font-weight: 600;
  margin-top: 10px;
  margin-left: 30px;
  align-self: center;
  font-family: 'Raleway';
}
#count-increase,
#count-decrease {
  width: 60px;
  height: 35px;
  color: #fff;
  border-radius: 4px;
  align-items: center;
  background: #0a3d62;
}
.material-icons {
  margin-top: 1px;
}
</style>
