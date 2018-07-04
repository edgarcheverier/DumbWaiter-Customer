<template>
  <div class="list-item-wrap">
    <div 
      class="list-item-content" 
      @click="handleClickModal(item)">
      <h1 id="list-item-header">{{ name }}</h1>
      <p id="list-item-slugline">{{ description }}</p>
    </div>
    <p id="list-item-price">{{ price }} €</p>
    <button 
      id="list-item-order-button"
      @click="handleClickOrder" 
    >
      <ion-icon 
        id="checkout" 
        name="add-circle"/>
    </button>
    <Modal 
      ref="modal" 
    />
    <sweet-modal 
      ref="order" 
      :enable-mobile-fullscreen="false"
      icon="success">
      <p id="order-confirm">{{ name }} has been added to your order!</p> 
    </sweet-modal>
  </div>
</template>

<script>
import Modal from '../Modal/Modal';
export default {
  name: 'ListItemContent',
  components: {
    Modal,
  },
  props: {
    name: String,
    description: String,
    price: Number,
    item: Object,
  },
  methods: {
    handleClickModal(item) {
      this.$store.commit('itemSelected', {
        id: item.ide,
        name: item.name,
        price: item.price,
        quantity: 1,
        description: item.description,
        photo: item.photos[0].url,
      });
      this.$refs.modal.open();
    },
    handleClickOrder(item) {
      this.$refs.order.open();
    },
    addItem(item) {
      let itemSelect = {
        id: item.id,
        quantity: 1,
        name: item.name,
        price: item.price,
      };
      this.$store.commit('shoppingList', itemSelect);
      this.$store.commit('updateAmount', itemSelect.price);
      this.$swal(`${item.name} is added to your Cart`);
      console.log('before to go to the cart', itemSelect);
    },
  },
};
</script>


<style>
.list-item-content {
  position: absolute;
  color: #fff;
  width: 90%;
  height: 150px;
  margin: 0 auto;
  top: 40%;
  left: 50%;
  align-content: center;
  transform: translate(-50%, -50%);
}
#list-item-header {
  font-family: Raleway;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: 1.7em;
  margin-bottom: 5px;
  margin-top: 20px;
}
#list-item-slugline {
  height: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Raleway;
  font-weight: 400;
  font-size: 0.9em;
  width: 90%;
  margin: 0 auto;
}
#list-item-price {
  position: absolute;
  font-family: Raleway;
  font-weight: 500;
  font-size: 1.2em;
  color: #fff;
  top: 74%;
  left: 5%;
}
#list-item-order-button {
  position: absolute;
  top: 71%;
  right: 3%;
  color: #fff;
}
#checkout {
  font-size: 2rem;
}
#order-confirm {
  width: 80%;
  margin: 0 auto;
  font-size: 0.8em;
}
</style>
