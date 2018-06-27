<template>
  <div>
    <MenuNav 
      :menu-title="menuTitle" 
      :go-back="goBack"/>
    <div>
      <ul>
        <li 
          v-for="(item, index) in items" 
          :key="index">
          <div class="row">
            <div class="col s12 m6">
              <div class="card">
                <div class="card-image">
                  <img 
                    :src="item.photo" 
                    @click="handleClickImage(item)">
                  <span class="card-title">{{ item.name }}</span>
                  <a 
                    class="btn-floating halfway-fab waves-effect waves-light red addButton"
                    @click="addToShoppingCar(item)" 
                  ><i class="material-icons addIcon">add</i></a>
                </div>
                <div class="card-content">
                  <p>{{ item.description }} - {{ item.price }}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import MenuNav from './MenuNav.vue';

export default {
  name: 'Welcome',
  components: {
    MenuNav,
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
  computed: {},
  methods: {
    goBack() {
      this.$router.push('/Welcome');
    },
    handleClickImage(item) {
      this.$store.commit('itemSelected', {
        name: item.name,
        price: item.price,
        description: item.description,
        photo: item.photo,
      });
      this.$router.push('/Card');
    },
    addToShoppingCar(item) {
      this.$store.commit('shoppingList', {
        name: item.name,
        price: item.price,
        description: item.description,
        photo: item.photo,
      });
      M.toast({
        html: 'Your order is added to the Shopping List :)',
        classes: 'rounded',
      });
      this.$router.push('/Menu'); // here the Shopping List Page
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'Menu.css';
</style>
