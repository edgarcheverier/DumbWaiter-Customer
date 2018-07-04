<template>
  <div class="mover">
    <h3>Currently trending: </h3>
    <carousel 
      :pagination-enabled="false" 
      :per-page="2.3">
      <slide 
        v-for="(item, index) in items" 
        :key="index">
        <div class="card">
          <img 
            :src="item.photos[0].url"
            alt=""
            @click="() => handleclickimage(item)"> 
          <p>{{ item.name }}</p>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'ListItemDetailCarousel',
  components: {
    Carousel,
    Slide,
  },
  data: function() {
    if (this.$store.state.menuSelected == 'Food') {
      return {
        items: this.$store.state.foodOptions,
        menuTitle: this.$store.state.menuSelected,
      };
    } else if (this.$store.state.menuSelected == 'Drinks') {
      return {
        items: this.$store.state.drinksOptions,
        menuTitle: this.$store.state.menuSelected,
      };
    } else if (
      this.$store.state.menuSelected == 'Desserts'
    ) {
      return {
        items: this.$store.state.dessertsOptions,
        menuTitle: this.$store.state.menuSelected,
      };
    }
  },
  methods: {
    handleclickimage(item) {
      this.$store.commit('itemSelected', {
        id: item.ide,
        name: item.name,
        price: item.price,
        description: item.description,
        photo: item.photos[0].url,
      });
      this.$router.push('/detail');
    },
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
  z-index: 99999 !important;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15),
    0 6px 6px rgba(0, 0, 0, 0.23);
}
.card img {
  height: 100px;
  width: 150px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}
.card p {
  font-family: Raleway;
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
