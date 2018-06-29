<template>
  <img 
    id="detail-hero-image" 
    :src="image"
    alt="soup bowl, asian">
</template>

<script>
export default {
  name: 'ListItemDetailImage',
  components: {},
  data: function() {
    return {
      image: this.$store.state.itemSelected.photo,
    };
  },
};
</script>

<style>
#detail-hero-image {
  height: 220px;
}
</style>
