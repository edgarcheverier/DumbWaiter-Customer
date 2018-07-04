<template>
  <sweet-modal ref="map">
    <h3>{{ name }}</h3>
    
    <button @click="selectRestaurant">Go to {{ name }}</button>
  </sweet-modal>
</template>

<script>
export default {
  name: 'MapModal',
  beforeCreate() {
    this.name = this.$store.state.itemSelected.name;
    this.description = this.$store.state.itemSelected.description;
    this.photo = this.$store.state.itemSelected.photo;
  },
  methods: {
    openModal(item) {
      this.$refs.map.open();
    },
  },
};
</script>

<style scoped>
@import '../../assets/styles/global.css';
</style>
