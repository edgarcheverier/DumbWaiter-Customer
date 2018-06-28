<template>
  <list-item/>
</template>

<script>
import ListItem from '../../components/ListItem/ListItem';

export default {
  name: 'Welcome',
  components: {
    ListItem,
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
  beforeCreate() {
    if (this.$store.state.customer.name == undefined) {
      this.$router.push('/');
    }
  },
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

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.contain {
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100vh;
}
</style>
