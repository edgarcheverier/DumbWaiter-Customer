<template>
  <div class="contain">
    <div class="rowing">
      <div class="column">
        <div class="card-image">
          <img 
            class="card-image-hero" 
            src="https://images.unsplash.com/photo-1518646261099-bd070a676912?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4948465739b5a76034aae5380d2f8b67&auto=format&fit=crop&w=1650&q=80" 
            alt="soup bowl, asian">
        </div>
      </div>
    </div>
    <div class="rowing">
      <div class="column">
        <div class="card-content">
          <h1>Asian Soup Bowl</h1>
          <p>Boudin chicken fatback, jerky ground round chuck bacon sausage tenderloin turducken swine drumstick salami ball tip. Burgdoggen frankfurter drumstick pork belly sirloin. Venison pastrami swine chicken picanha, shoulder kevin.</p>
          <h3 class="trending">Currently trending: </h3>
        </div>
      </div>
    </div>
    <carousel-list/>
  </div>
</template>

<script>
import CarouselList from '../Carousel/Carousel.vue';

export default {
  name: 'ListCard',
  components: {
    CarouselList,
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
  margin: 0 auto;
  height: 1000px;
}
.rowing {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.column {
  flex: 1;
}
.card-image-hero {
  height: 250px;
}
.card-content {
  margin: 20px;
}
.card-content h1 {
  font-family: Raleway;
  font-weight: 300;
  font-size: 1.7em;
  margin-bottom: 10px;
}
.card-content p {
  font-family: Merriweather;
  font-weight: 300;
  font-size: 0.8em;
  margin-bottom: 20px;
}
.trending {
  font-family: Raleway;
  font-weight: 700;
  font-size: 1em;
}
</style>
