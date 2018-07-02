<template>
  <sweet-modal 
    ref="jim" 
  >
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

<style>
.sweet-content {
  width: 100%;
  padding: 0 !important;
}
.sweet-action-close {
  color: red !important;
  z-index: 99999 !important;
}
#content-header {
  width: 90%;
}
#detail-hero-image {
  height: 260px;
}
</style>
