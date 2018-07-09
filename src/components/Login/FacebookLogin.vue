<template>
  <fb-signin-button
    id="fb-login-button"
    :params="fbSignInParams"
    type="submit"
    name="action"
    @success="onSignInSuccess"
    @error="onSignInError">
    <p id="fb-login-text">Login with Facebook</p>
  </fb-signin-button>

</template>

<script>
/*
    <ion-icon
      id="fb-login-icon"
      name="logo-facebook"/>
*/
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
  name: 'FacebookLogin',
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
        this.$router.push('/maps');
      }
    });
  },
  methods: {
    async onSignInSuccess(response) {
      const authFacebook = await authService.authFacebook(
        response.authResponse,
        response => {
          localStorage.setItem(
            'user',
            JSON.stringify(response.user)
          );
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
      console.log('login failed', error);
    },
  },
};
</script>

<style scoped>
#fb-login-button {
  width: 100%;
  height: 60px;
  display: flex;
  color: #ffffff;
  flex-direction: row;
  font-family: Raleway;
  font-weight: 200px;
  align-items: center;
  justify-content: center;
  background-color: #3b5998;
}
#fb-login-icon {
  width: 2.5em;
  height: 2.5em;
  margin-right: 10px;
}
#fb-login-text {
  font-size: 1em;
  font-weight: 400;
}
@import '../../assets/styles/global.css';
</style>
