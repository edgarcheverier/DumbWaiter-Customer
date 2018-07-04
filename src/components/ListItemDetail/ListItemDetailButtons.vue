<template>
  <div id="list-item-detail-buttons-container">
    <button 
      id="order-button" 
      @click="handleClick">Order</button>
    <p id="count-tracker">Count: {{ quantity }}</p>
    <div>
      <button 
        id="count-increase" 
        @click="subtract">
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
    subtract() {
      if (this.quantity >= 2) {
        this.quantity--;
      }
    },
    handleClick() {
      let amount = this.itemSelected.price * this.quantity;
      let item = {
        id: this.itemSelected.id,
        name: this.itemSelected.name,
        price: this.itemSelected.price,
        count: this.quantity,
      };
      this.$store.commit('shoppingList', item);
      this.$store.commit('updateAmount', amount);
      alert(`${item.name}, added to your cart`);
      console.log(
        `itemSeclected ${item.name}, ${item.id}, ${
          item.price
        }, ${item.count}`
      );
      this.quantity = 1;
    },
  },
};
</script>

<style scoped>
#list-item-detail-buttons-container {
  width: 80%;
  display: flex;
  margin: 0 auto;
  margin-bottom: 20px;
  align-items: center;
  font-family: Raleway;
  flex-direction: row-reverse;
  justify-content: space-between;
}
#order-button {
  width: 80px;
  height: 40px;
  color: #fff;
  font-weight: 700;
  border-radius: 4px;
  background: #0a3d62;
}
#count-tracker {
  font-size: 0.9em;
  font-weight: 400;
  align-self: center;
  font-family: Raleway;
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
@import '../../assets/styles/global.css';
</style>
