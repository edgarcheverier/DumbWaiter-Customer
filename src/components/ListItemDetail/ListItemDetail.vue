<template>
  <div id="list-item-detail-wrapper">
    <list-item-detail-image/>
    <list-item-detail-content/> 
    <list-item-detail-buttons/>
    <list-item-detail-break/> 
    <list-item-detail-carousel/>  
  </div>
</template>

<script>
import Navbar from '../Navbar/Navbar';
import ListItemDetailBreak from './ListItemDetailBreak';
import ListItemDetailImage from './ListiItemDetailImage';
import ListItemDetailCarousel from '../Carousel/Carousel';
import ListItemDetailContent from './ListItemDetailContent';
import ListItemDetailButtons from './ListItemDetailButtons';

export default {
  name: 'ListItemDetail',
  components: {
    Navbar,
    ListItemDetailImage,
    ListItemDetailContent,
    ListItemDetailButtons,
    ListItemDetailBreak,
    ListItemDetailCarousel,
  },
  beforeCreate() {
    this.$store.commit('updatePath', '/List');
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  background-color: #fff;
}
#list-item-detail-wrapper {
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
}
</style>
