<template>
  <sweet-modal 
    ref="jim">
    <list-item-detail/>
  </sweet-modal>
</template>

<script>
import Navbar from '../Navbar/Navbar';
import ListItemDetail from '../ListItemDetail/ListItemDetail';

export default {
  name: 'Modal',
  components: {
    Navbar,
    ListItemDetail,
  },
  beforeCreate() {
    this.id = this.$store.state.itemSelected.id;
    this.name = this.$store.state.itemSelected.name;
    this.price = this.$store.state.itemSelected.price;
    this.description = this.$store.state.itemSelected.description;
    this.photo = this.$store.state.itemSelected.photo;
  },
  methods: {
    open(item) {
      this.$refs.jim.open();
    },
  },
};
</script>

<style scoped>
#detail-hero-image {
  height: 260px;
}
@import '../../assets/styles/global.css';
</style>
