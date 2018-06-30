
<template>
  <div class="root">
    <button
      class="btn"
      @click="dispatchOrder">button</button>

    <input
      id="txtName"
      v-model="txtInput"
      type="text"
      @keyup.enter="addMessage">

    <form
      id="stripe-checkout"
      action="your-server-side-code"
      method="POST"/>


  </div>
</template>

<script>
export default {
  data: function() {
    return {
      txtInput: '',
    };
  },
  mounted() {
    let stripeScript = document.createElement('script');
    stripeScript.setAttribute(
      'src',
      'https://checkout.stripe.com/checkout.js'
    );
    stripeScript.setAttribute('class', 'stripe-button');
    stripeScript.setAttribute(
      'data-key',
      'pk_test_fLPmqxecZJczNSmVGLv3YN1c'
    );
    stripeScript.setAttribute(
      'data-amount',
      this.$store.state.amount * 100
    );
    stripeScript.setAttribute('data-name', 'Dumbwaiter');
    stripeScript.setAttribute(
      'data-description',
      'Your Payment'
    );
    stripeScript.setAttribute(
      'data-image',
      'https://stripe.com/img/documentation/checkout/marketplace.png'
    );
    stripeScript.setAttribute('data-locale', 'auto');
    stripeScript.setAttribute('data-currency', 'eur');
    document
      .getElementById('stripe-checkout')
      .appendChild(stripeScript);
  },

  methods: {
    dispatchOrder() {
      console.log(this.txtInput);
      event.preventDefault();
      this.$store.commit('processOrder', {
        notes: this.txtInput,
      });
    },
    addMessage() {
      console.log(this.txtInput);
    },
  },
};
</script>
<style>
.btn {
  display: block;
  position: relative;
  padding: 0 12px;
  height: 30px;
  line-height: 30px;
  background: #1275ff;
}
</style>
