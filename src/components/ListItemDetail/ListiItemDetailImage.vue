<template>
  <img 
    id="detail-hero-image" 
    :src="image"
    alt="">
</template>

<script>
export default {
  name: 'ListItemDetailImage',
  components: {},
  computed: {
    image() {
      return this.$store.state.itemSelected.photo;
    },
  },
};
</script>

<style>
#detail-hero-image {
  height: 220px;
}
</style>
