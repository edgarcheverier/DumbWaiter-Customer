<template functional>
        <!-- <div class="footer-form">
          <form id="submit-form" @submit.prevent="processForm">
            <input type="text" placeholder="special requests"><br />
            <button class="btn" type="submit">Pay</button>
        </form> -->
        <form >
            <button class="btn" @click="props.dispatchOrder">
Send Order
            </button>
        </form>
  </div>
</template>
<script>

export default {

  methods: {
    processForm: function () {

      console.log(props.userData ),
      console.log('hello' )
    }
  },
  data: function () {
    return {
      userData: {
        shoppingListData: this.$store.state.shoppingList,
        table: this.$store.state.shoppingList,
        user:this.$store.state.user,
        request:"",
      },
      product: {
    name: 'Moby Dick',
    description: 'I love whales',
    amount: 100000 // 100$ in cents
}
      }

  }
}




</script>
<style>
.footer-form {
background-color: yellow;
margin: 5vh;
}

.btn {
  width: 75vw;
  height: 5vh;
  background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  text-shadow: 1px 1px 3px #666666;
  font-family: Arial;
  color: #ffffff;
  font-size: 11px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}

</style>
