<template>
  <div id="list-item-detail-content-container">
    <h1 id="content-header">{{ name }} - {{ price }}€</h1>
    <list-item-detail-break/> 
    <p id="content-description">{{ description }} </p>
  </div>
</template>

<script>
import ListItemDetailBreak from './ListItemDetailBreak';
export default {
  name: 'ListItemDetailContent',
  components: {
    ListItemDetailBreak,
  },
  computed: {
    name() {
      return this.$store.state.itemSelected.name;
    },
    price() {
      return this.$store.state.itemSelected.price;
    },
    description() {
      return this.$store.state.itemSelected.description;
    },
  },
};
</script>

<style>
#list-item-detail-content-container {
  justify-content: center;
  padding: 2px;
  margin: 0 auto !important;
  margin-bottom: 5px !important;
}
#content-header {
  font-weight: 300;
  font-size: 1.7em;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: Raleway;
}
#content-description {
  font-weight: 300;
  font-size: 0.8em;
  font-family: Merriweather;
}
</style>
