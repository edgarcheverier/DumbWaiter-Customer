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
</style>
