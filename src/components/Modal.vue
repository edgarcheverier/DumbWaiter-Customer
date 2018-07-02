<template>
  <sweet-modal 
    ref="jim" 
    icon="success">
    <p>hey</p>
  </sweet-modal>
</template>

<script>
export default {
  name: 'Modal',
  components: {},
  data: function() {
    return {
      id: String,
      name: String,
      price: Number,
      description: String,
      photo: String,
    };
  },
  beforeCreate() {
    this.id = this.$store.state.itemSelected.id;
    this.name = this.$store.state.itemSelected.name;
    this.price = this.$store.state.itemSelected.price;
    this.description = this.$store.state.itemSelected.description;
    this.photo = this.$store.state.itemSelected.photo;
  },
  methods: {
    open() {
      this.$refs.jim.open();
    },
  },
};
</script>

<style scoped>
</style>
