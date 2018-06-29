<template>
  <div id="list-item-detail-content-container">
    <h1 id="content-header">{{ name }} - {{ price }}€</h1>
    <p id="content-description">{{ description }} </p>
  </div>
</template>

<script>
export default {
  name: 'ListItemDetailContent',
  components: {},
  data: function() {
    return {
      name: this.$store.state.itemSelected.name,
      price: this.$store.state.itemSelected.price,
      description: this.$store.state.itemSelected
        .description,
    };
  },
};
</script>

<style>
#list-item-detail-content-container {
  width: 90%;
  justify-content: center;
  margin: 0 auto !important;
}
#content-header {
  font-weight: 300;
  font-size: 1.7em;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: Raleway;
}
#content-decription {
  font-weight: 300;
  font-size: 0.8em;
  font-family: Merriweather;
}
</style>
