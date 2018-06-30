<template
  id="template-id"
  onloadeddata=""
  functional>
  <!-- <div class="footer-form">
          <form id="submit-form" @submit.prevent="processForm">
            <input type="text" placeholder="special requests"><br />
            <button class="btn" type="submit">Pay</button>
        </form> -->
  <!-- </div> -->
  <!-- <form >
    <input type="text" >
    <button
      class="btn"
      @click="props.dispatchOrder">
      Send Order
    </button>

  </form> -->

  <!--
  <div >
    <button
      class="btn"
      @click="checkout">Checkout</button>
  </div> -->

  <form
    id="stripe-checkout"
    action="your-server-side-code"
    method="POST">
    <div id="payment-request-button"/>
  </form>





</template>
<script>
export default {
  created() {
    let stripeScript = document.createElement('script');
    stripeScript
      .setAttribute(
        'src',
        'https://www.google.com/recaptcha/api.js'
      )
      .setAttribute(
        'data-key',
        'pk_test_fLPmqxecZJczNSmVGLv3YN1c'
      )
      .setAttribute('data-amount', 'insert checkout value')
      .setAttribute('data-name', 'Dumbwaiter')
      .setAtrribute('data-description', 'Widget')
      .setAtrribute(
        'data-image',
        'https://stripe.com/img/documentation/checkout/marketplace.png'
      )
      .setAtrribute('data-locale', 'auto')
      .setAttribute('data-cuurency', 'eur');
    document
      .getElementById('stripe-checkout')
      .appendChild(stripeScript);

    let formScript = document.createElement('script');

    formScript.setAtrribute(
      'src',
      'https://js.stripe.com/v3/'
    );
    document
      .getElementById('template-id')
      .appendChild(formScript);
  },
  methods: {
    checkout() {
      // this.$checkout.close()
      // is also available.
      this.$checkout.open({
        name: 'Shut up and take my money!',
        currency: 'USD',
        amount: 99999,
        token: token => {
          // Send the token to your server
          // for payment or subscription handling,
          // or do whatever you want with it
          // I don't really care.
        },
      });
    },
  },
};
let paymentRequest = stripe.paymentRequest({
  country: 'Catalonia',
  currency: 'Euro',
  total: {
    label: 'Demo Total',
    amount: 1000,
  },
});
const stripe = Stripe('pk_test_fLPmqxecZJczNSmVGLv3YN1c');
const elements = stripe.elements();
const prButton = elements.create('paymentRequestButton', {
  paymentRequest: paymentRequest,
});
paymentRequest.canMakePayment().then(res => {
  if (result) {
    prButton.mount('#payment-request-button');
  } else {
    document.getElementById(
      'payment-request-button'
    ).style.display =
      'none';
  }
});
</script>
<style>
input {
  margin: 5px;
  border-radius: 4px;
  width: 75vw;
  height: 5vh;
}
.footer-form {
  background-color: yellow;
  margin: 5vh;
}

.btn {
  margin-bottom: 10vh;
  width: 75vw;
  height: 5vh;
  background: #3498db;
  background-image: -webkit-linear-gradient(
    top,
    #3498db,
    #2980b9
  );
  background-image: -moz-linear-gradient(
    top,
    #3498db,
    #2980b9
  );
  background-image: -ms-linear-gradient(
    top,
    #3498db,
    #2980b9
  );
  background-image: -o-linear-gradient(
    top,
    #3498db,
    #2980b9
  );
  background-image: linear-gradient(
    to bottom,
    #3498db,
    #2980b9
  );
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 4px;
  text-shadow: 1px 1px 3px #666666;
  font-family: Arial;
  color: #ffffff;
  font-size: 11px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}
</style>
