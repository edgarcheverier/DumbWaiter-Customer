<template>
  <div class="contain">
    <card-image/>
    <card-content/>
    <card-buttons/>
    <card-break/>
    <carousel-list/>
    <card-footer/>
  </div>
</template>

<script>
import CardImage from '../Card/CardImage';
import CardContent from '../Card/CardContent';
import CardButtons from '../Card/CardButtons';
import CardBreak from '../Card/CardBreak';
import CardFooter from '../Card/CardFooter';
import CarouselList from '../Carousel/Carousel.vue';

export default {
  name: 'ListCard',
  components: {
    CardImage,
    CardContent,
    CardButtons,
    CardBreak,
    CarouselList,
    CardFooter,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  background-color: #fff;
}
.contain {
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
}
</style>
