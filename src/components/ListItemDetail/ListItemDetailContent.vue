<template>
  <div id="list-item-detail-content-container">
    <h1 id="content-header">{{ name }} - {{ price }}€</h1>
    <p id="content-description">{{ description }} </p>
    <list-item-detail-break/>
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

<style scoped>
#list-item-detail-content-container {
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
}
#content-header {
  font-weight: 200;
  font-size: 1.8em;
  margin: 20px 0;
  line-height: 1.2;
}
#content-description {
  font-weight: 200;
  font-size: 0.9em;
}
@import '../../assets/styles/global.css';
</style>
