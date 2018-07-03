<template>
  <div>
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
import authService from '../../services/auth.service';

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
  beforeCreate() {
    const token = localStorage.getItem('token');
    authService.verifyToken(token, response => {
      if (response.isvalid) {
        this.$store.commit(
          'customerInformation',
          response.user
        );
        this.$router.push('/Maps');
      }
    });
  },
  methods: {
    async onSignInSuccess(response) {
      console.log(response.authResponse);
      const authFacebook = await authService.authFacebook(
        response.authResponse,
        response => {
          this.$store.commit(
            'customerInformation',
            response.user
          );
          localStorage.setItem('token', response.token);
          this.$router.push('/Maps');
        }
      );
    },
    onSignInError(error) {
      console.log('Sign in with facebook faile', error);
    },
  },
};
</script>
<style lang="scss" scoped>
@import './Login.css';
</style>
