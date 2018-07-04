<template>
  <div class="wrapper">
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
            @click="() => handleClickModal(item)">
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
    handleClickModal(item) {
      this.$store.commit('itemSelected', {
        id: item.id,
        name: item.name,
        price: item.price,
        count: 1,
        description: item.description,
        photo: item.photos[0].url,
      });
      this.$refs.modal.open();
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.card {
  width: 150px;
  height: 130px;
  border-radius: 4px;
  line-height: 1.1;
  background: #fff;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15),
    0 6px 6px rgba(0, 0, 0, 0.23);
}
.card img {
  width: 150px;
  height: 90px;
  border-radius: 4px;
}
.card p {
  font-family: Raleway;
  font-weight: 400;
  font-size: 0.8em;
}
h3 {
  font-weight: 400;
  font-size: 1.1em;
  text-align: left;
  margin: 0 0 10px 38px;
}
.VueCarousel-slide:first-child {
  margin-left: 38px;
}
@import '../../assets/styles/global.css';
</style>
