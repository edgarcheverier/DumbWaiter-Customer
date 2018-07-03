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
            @click="() => removeElements(item)" >
            <ion-icon 
              id="checkout" 
              name="remove-circle"/>
          </button>
          <p class="itemName">{{ item.count }}</p>
          <button 
            class="removeButton" 
            @click="() => addElements(item)" > 
            <ion-icon 
              id="checkout" 
              name="add-circle"/>
          </button>
        </div>
        <div class="priceContainer">
          <p class="itemName">{{ item.price }} €</p>
        </div>
        <hr>
      </div>
      <div 
        v-if="userKey !== 'Connect'" 
        class="buttonContainer">
        <button 
          class="orderButton" 
          @click="SubmitOrder">Order Now</button>
      </div>
      <div 
        v-if="userKey == 'Connect'" 
        class="buttonContainer">
        <button 
          class="orderButton" 
          @click="goToConnect">Please Connect to Order</button>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCart from './ItemCart.vue';
import Navbar from '../Navbar/Navbar.vue';
export default {
  name: 'Cart',
  components: {
    Navbar,
    ItemCart,
  },
  data: function() {
    return {
      shoppingListData: [],
      total: this.$store.state.amount.total,
      userKey: this.$store.state.restaurantKey,
      connectionId: this.$store.state.connectionId,
      cartList: [],
    };
  },
  computed: {},
  beforeCreate() {
    this.$store.commit('updatePath', '/List');
  },
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
    SubmitOrder() {
      let arrayOfId = [];
      this.cartList.map(ele => {
        if (ele.count == 1) {
          arrayOfId.push(ele.id);
        } else {
          for (let i = 0; i < ele.count; i++) {
            arrayOfId.push(ele.id);
          }
        }
      });
      console.log(arrayOfId.join(','));
      console.log(
        'SubmitOrder Total:',
        this.$store.state.amount.total
      );
      console.log(
        'SubmitOrder connectionId:',
        this.connectionId
      );
      this.$store.dispatch('submitOrder', {
        array: arrayOfId.join(','),
        id: this.connectionId,
        amount: this.$store.state.amount.total,
      });
      this.$router.push('/Welcome');
    },

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

    goToConnect() {
      this.$router.push('/Connection');
    },
  },
};
</script>

<style>
.removeButton {
  color: black;
}

.orderButton {
  border: 0.5px solid black;
  background-color: black;
  font-size: 15px;
  margin-top: 20px;
  padding: 5px 30px;
  color: white;
}
.itemsContainers {
  display: flex;
  justify-content: center;
  margin-top: 35px;
  margin-left: 10px;
  margin-right: 10px;
}
.priceCount {
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
  margin-left: 10px;
  margin-right: 10px;
}
.itemName {
  color: black;
}
.priceContainer {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
