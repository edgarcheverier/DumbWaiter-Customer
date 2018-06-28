<template>
  <div id="list-item-detail-wrapper">
    <list-item-detail-image/>
    <list-item-detail-content/>
    <list-item-detail-buttons/>
    <list-item-detail-break/> 
    <list-item-detail-carousel/>
    <Footer/>
  </div>
</template>

<script>
import ListItemDetailImage from './ListiItemDetailImage';
import ListItemDetailContent from './ListItemDetailContent';
import ListItemDetailButtons from './ListItemDetailButtons';
import ListItemDetailBreak from './ListItemDetailBreak';
import ListItemDetailCarousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';

export default {
  name: 'ListItemDetail',
  components: {
    ListItemDetailImage,
    ListItemDetailContent,
    ListItemDetailButtons,
    ListItemDetailBreak,
    ListItemDetailCarousel,
    Footer,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#list-item-detail-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
