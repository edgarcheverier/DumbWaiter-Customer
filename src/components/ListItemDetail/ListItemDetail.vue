<template>
  <div id="list-item-detail-wrapper">
    <Navbar/>
    <list-item-detail-image/>
    <list-item-detail-content/>
    <list-item-detail-buttons/>
    <list-item-detail-break/> 
    <list-item-detail-carousel/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../Navbar/Navbar';
import ListItemDetailBreak from './ListItemDetailBreak';
import ListItemDetailImage from './ListiItemDetailImage';
import ListItemDetailCarousel from '../Carousel/Carousel';
import ListItemDetailContent from './ListItemDetailContent';
import ListItemDetailButtons from './ListItemDetailButtons';
import Footer from '../Footer/Footer';

export default {
  name: 'ListItemDetail',
  components: {
    Navbar,
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
  display: flex;
  flex-direction: column;
}
</style>
