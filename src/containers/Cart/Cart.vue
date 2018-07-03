<template>
  <div>
    <Navbar />
    <div>
      <div 
        v-for="(item, index) in cartList" 
        :key="index" 
        class="listContainer">
        <div class="itemsContainers">
          <p class="itemName">{{ item.name }}</p>
        </div>
        <div class="priceCount">
          <button 
            class="removeButton" 
            @click="() => removeElements(item)" > - </button>
          <p class="itemName">{{ item.count }}</p>
          <button 
            class="removeButton" 
            @click="() => addElements(item)" > + </button>
          <p class="itemName">{{ item.price }} €</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCart from './ItemCart.vue';
import Navbar from '../../components/Navbar/Navbar.vue';
export default {
  name: 'Cart',
  components: {
    Navbar,
    ItemCart,
  },
  data: function() {
    return {
      shoppingListData: [],
      total: this.$store.state.subTotal,
      cartList: [],
    };
  },
  computed: {},
  mounted() {
    this.shoppingListData = this.$store.state.shoppingList;
    this.total = this.$store.state.amount.total;
    let map = this.shoppingListData.reduce((acc, cur) => {
      const repeated = acc.find(el => el.id === cur.id);
      if (repeated) {
        repeated.count++;
      } else {
        acc.push(Object.assign(cur, { count: 1 }));
      }
      return acc;
    }, []);
    console.log(map);
    this.$store.commit('cartList', map);
    this.cartList = this.$store.state.cartList;
  },
  methods: {
    removeElements(item) {
      if (item.count > 0) {
        let arr = this.$store.state.shoppingList.map(
          ele => {
            if (ele.id === item.id) {
              return {
                id: item.id,
                name: item.name,
                price: item.price,
                count: item.count--,
              };
            } else {
              return item;
            }
          }
        );
        console.log(arr);
        this.$store.commit('cartList', arr);
        this.$store.commit('subtracAmount', item.price);
        this.$forceUpdate();
      }
    },
    addElements(item) {
      let arr = this.$store.state.shoppingList.map(ele => {
        if (ele.id === item.id) {
          return {
            id: item.id,
            name: item.name,
            price: item.price,
            count: item.count++,
          };
        } else {
          return ele;
        }
      });
      console.log(arr);
      this.$store.commit('cartList', arr);
      this.$store.commit('updateAmount', item.price);
      this.$forceUpdate();
    },
  },
};
</script>

<style>
.removeButton {
  background-color: white;
  padding: 5px 15px;
}
</style>
