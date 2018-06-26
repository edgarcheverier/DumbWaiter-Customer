<template>
  <carousel 
    :pagination-enabled="false" 
    :per-page="2.2">
    <slide>
      <div class="rowing">
        <div class="column">
          <div class="card-image">
            <img 
              class="card-image-item" 
              src="https://images.unsplash.com/photo-1518646261099-bd070a676912?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4948465739b5a76034aae5380d2f8b67&auto=format&fit=crop&w=1650&q=80" 
              alt="soup bowl, asian">
          </div>
        </div>
      </div>
    </slide>
    <slide>
      <div class="rowing">
        <div class="column">
          <div class="card-image">
            <img 
              class="card-image-item" 
              src="https://images.unsplash.com/photo-1518646261099-bd070a676912?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4948465739b5a76034aae5380d2f8b67&auto=format&fit=crop&w=1650&q=80" 
              alt="soup bowl, asian">
          </div>
        </div>
      </div>
    </slide>
    <slide>
      <div class="rowing">
        <div class="column">
          <div class="card-image">
            <img 
              class="card-image-item" 
              src="https://images.unsplash.com/photo-1518646261099-bd070a676912?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4948465739b5a76034aae5380d2f8b67&auto=format&fit=crop&w=1650&q=80" 
              alt="soup bowl, asian">
          </div>
        </div>
      </div>
    </slide>
  </carousel>

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
  background-color: #fff;
}
/* .contain {
  margin: 0 auto;
} */
.rowing {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.column {
  flex: 1;
}
.card-image {
  height: 160px;
}
.card-image-item {
  height: 110px;
  width: 100%;
  border-radius: 7px;
  padding: 3px;
  /* box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22); */
}
.VueCarousel {
  margin-left: 16px;
}
</style>
