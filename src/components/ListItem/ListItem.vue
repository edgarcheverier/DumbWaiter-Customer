<template>
  <div id="wrapper">
    <Navbar/>
    <ul>
      <li 
        v-for="(item, index) in items" 
        :key="index">
        <div id="list-item-container">
          <list-item-image 
            :image="item.photos[0].url"
            :handleclickimage="() => handleclickimage(item)" />
          <list-item-content 
            :name="item.name" 
            :description="item.description" 
            :price="item.price"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Navbar from '../Navbar/Navbar';
import ListItemImage from './ListItemImage';
import ListItemContent from './ListItemContent';
import Footer from '../Footer/Footer';

export default {
  name: 'ListItem',
  components: {
    Navbar,
    ListItemImage,
    ListItemContent,
    Footer,
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
      console.log(this.$store.state.itemSelected);
      this.$router.push('/detail');
    },
    goCheckout() {
      this.$router.push('/Cart');
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#list-item-container {
  display: flex;
  position: relative;
  text-align: center;
  margin: 0 auto;
  width: 95%;
}
</style>
