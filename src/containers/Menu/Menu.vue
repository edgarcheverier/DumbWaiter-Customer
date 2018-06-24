<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <h6 class="brand-logo center">{{ menuSelected }}</h6>
        <ul class="left">
          <li><button @click="goBack"><i class="material-icons leftIcon">chevron_left</i></button></li>
        </ul>
        <ul class="right">
          <li><button><i class="material-icons rightIcon">local_grocery_store</i></button></li>
        </ul>
      </div>
    </nav>
    <div>
      <ul>
        <li 
          v-for="(item, index) in items" 
          :key="index">
          <div class="itemContainer">
            <div class="nameContainer">
              <span class="itemName">{{ item.name }}</span>
              <span class="itemName">{{ item.price }}</span>
            </div>
            <div class="photoContainer">
              <img 
                :src="item.photo" 
                class="foodPhoto" > 
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data: function() {
    if (this.$store.state.menuSelected == 'Food') {
      return {
        items: this.$store.state.foodOptions,
      };
    } else if (this.$store.state.menuSelected == 'Drinks') {
      return {
        items: this.$store.state.drinksOptions,
      };
    } else if (
      this.$store.state.menuSelected == 'Desserts'
    ) {
      return {
        items: this.$store.state.dessertsOptions,
      };
    }
  },
  computed: {
    menuSelected() {
      return this.$store.state.menuSelected;
    },
  },
  methods: {
    goBack() {
      this.$router.push('/Welcome');
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'Menu.css';
</style>
