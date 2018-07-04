<template>
  <div id="wrapper">
    <div id="logo-container">
      <h3 id="logo-text">Dumbwaiter</h3>
      <img 
        id="logo-image"
        src="./../../assets/img/reception.svg" 
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
  background-image: url('https://images.unsplash.com/photo-1513792117172-ef6bc78042c1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=370e34ca0e07fdcef373767f1c463090&auto=format&fit=crop&w=800&q=60');
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
  width: 8em;
  height: 8em;
  margin: 15px;
}
@import '../../assets/styles/global.css';
</style>
