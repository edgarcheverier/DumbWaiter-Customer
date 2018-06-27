<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <h6 class="brand-logo center">Dumbwaiter</h6>
      </div>
    </nav>
    <div class="logoContainer">
      <img 
        class="logo" 
        src="../../assets/img/reception.svg">
    </div>
    <div class="facebookContainer">
      <fb-signin-button
        :params="fbSignInParams" 
        type="submit"
        name="action"
        @success="onSignInSuccess"
        @error="onSignInError">
        Sign in with Facebook
        <i class="material-icons right">account_circle</i>
      </fb-signin-button>
    </div>
  </div>
</template>

<script>
window.fbAsyncInit = function() {
  FB.init({
    appId: '246012439316213',
    cookie: true,
    xfbml: true,
    version: 'v3.0',
  });
};
(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = '//connect.facebook.net/en_US/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');

export default {
  name: 'Login',
  components: {},
  data() {
    return {
      fbSignInParams: {
        scope: 'email,public_profile',
        return_scopes: true,
      },
    };
  },
  methods: {
    onSignInSuccess(response) {
      FB.api('/me', dude => {
        this.$router.push('/welcome');
        this.$store.commit('customerInformation', dude);
        console.log(this.$store.state.customer.id);
        console.log(this.$store.state.customer.name);
        console.log(`Good to see you, ${dude}.`);
      });
    },
    onSignInError(error) {
      console.log('OH NOES', error);
    },
  },
};
</script>
<style lang="scss" scoped>
@import './Login.css';
</style>
