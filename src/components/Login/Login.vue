<template>
  <div id="wrapper">
    <div id="logo-container">
      <img
        id="logo-image"
        src="./../../assets/img/logo.svg"
        alt="logo">
    </div>
    <facebook-login/>
  </div>
</template>

<script>
import FacebookLogin from './FacebookLogin';

export default {
  name: 'Login',
  components: {
    FacebookLogin,
  },
};
</script>

<style scoped>
#wrapper {
  width: 100%;
  display: flex;
  height: 100vh;
  background: #fa983a;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('../../assets/img/background.jpg');
}
#logo-container {
  margin-top: 40%;
  margin-bottom: 68%;
  display: inherit;
  align-items: center;
  flex-direction: inherit;
  justify-content: center;
  color: #ffffff;
}
#logo-text {
  font-size: 2.5em;
  text-transform: uppercase;
}
#logo-image {
  width: 20rem;
  height: 20rem;
  margin: 15px;
}
div#fb-login-button {
  position: fixed;
  bottom: 0;
  height: 90px;
  padding: 25px 0;
  font-size: 24px;
  width: 100%;
}
@import '../../assets/styles/global.css';
</style>
