<template>
  <mover>
    <h3>Currently trending: </h3>
    <carousel 
      :pagination-enabled="false" 
      :per-page="2.3">
      <slide>
        <div class="card">
          <img 
            src="https://images.unsplash.com/photo-1518646261099-bd070a676912?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4948465739b5a76034aae5380d2f8b67&auto=format&fit=crop&w=1650&q=80" 
            alt="soup bowl, asian">
          <p>Asian Soup Bowl</p>
        </div>
      </slide>
      <slide>
        <div class="card">
          <img 
            src="https://images.unsplash.com/photo-1518646261099-bd070a676912?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4948465739b5a76034aae5380d2f8b67&auto=format&fit=crop&w=1650&q=80" 
            alt="soup bowl, asian">
          <p>Asian Soup Bowl</p>
        </div>
      </slide>
      <slide>
        <div class="card">
          <img 
            src="https://images.unsplash.com/photo-1518646261099-bd070a676912?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4948465739b5a76034aae5380d2f8b67&auto=format&fit=crop&w=1650&q=80" 
            alt="soup bowl, asian">
          <p>Asian Soup Bowl</p>
        </div>
      </slide>
    </carousel>
  </mover>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'CarouselList',
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.VueCarousel-slide:first-child {
  height: 160px;
  margin-left: 20px;
}
.card {
  background: #fff;
  border-radius: 4px;
  display: inline-block;
  height: 145px;
  position: relative;
  width: 150px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15),
    0 6px 6px rgba(0, 0, 0, 0.23);
}
.card img {
  height: 100px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  /* border-radius: 0 !important; */
}
.card p {
  font: Raleway;
  font-weight: 600;
  font-size: 0.8em;
  margin-left: 7px;
}
h3 {
  font-family: Raleway;
  font-weight: 700;
  font-size: 1.1em;
  margin: 0 0 10px 20px;
}
</style>
