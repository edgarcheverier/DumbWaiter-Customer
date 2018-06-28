<template>
  <div class="contain">
    <card-image/>
    <card-content/>
    <card-buttons/>
    <card-break/>
    <carousel-list/>
    <footer/>
  </div>
</template>

<script>
import CardImage from '../Card/CardImage';
import CardContent from '../Card/CardContent';
import CardButtons from '../Card/CardButtons';
import CardBreak from '../Card/CardBreak';
import Footer from '../Footer/Footer';
import CarouselList from '../Carousel/Carousel';

export default {
  name: 'ListCard',
  components: {
    CardImage,
    CardContent,
    CardButtons,
    CardBreak,
    CarouselList,
    Footer,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.contain {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
