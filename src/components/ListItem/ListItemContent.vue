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
      id="list-item-checkout-button"
      @click="() => addItem(item)" 
    >
      <ion-icon 
        id="checkout" 
        name="add-circle"/>
    </button>
    <Modal 
      ref="modal" 
    />
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
        id: item.id,
        name: item.name,
        price: item.price,
        count: 1,
        description: item.description,
        photo: item.photos[0].url,
      });
      this.$refs.modal.open();
    },
    addItem(item) {
      let itemSelect = {
        id: item.id,
        count: 1,
        name: item.name,
        price: item.price,
      };
      this.$store.commit('pushCartList', itemSelect);
      //this.$store.commit('itemSelected', itemSelect);
      this.$store.commit('updateAmount', itemSelect.price);
      this.$swal(`${item.name} is added to your Cart`);
      console.log('itemSelected', itemSelect);
      console.log('carList', this.$store.state.cartList);
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
#list-item-checkout-button {
  position: absolute;
  top: 71%;
  right: 3%;
  color: #fff;
}
#checkout {
  font-size: 2rem;
}
</style>
