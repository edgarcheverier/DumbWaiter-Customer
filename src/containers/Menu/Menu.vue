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
    goCheckout() {
      this.$router.push('/Cart');
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
        id: item.id,
        name: item.name,
        price: item.price,
        description: item.description,
        photo: item.photo,
        quantity: 1,
      });
      console.log(this.$store.state.shoppingList);
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
