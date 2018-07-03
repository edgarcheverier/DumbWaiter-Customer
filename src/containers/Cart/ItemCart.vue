<template>
  <div>
    <div class="itemsContainers">
      <p class="itemName">{{ item.name }}</p>
    </div>
    <div class="priceCount">
      <p class="itemName">{{ item.count }}</p>
      <p class="itemName">{{ item.price * item.count }} €</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCart',
  props: {
    item: Object,
  },
};
</script>

<style>
.itemsContainers {
  display: flex;
  justify-content: center;
  margin-top: 35px;
  margin-left: 10px;
  margin-right: 10px;
}
.priceCount {
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
  margin-left: 10px;
  margin-right: 10px;
}
.itemName {
  color: white;
}
</style>
