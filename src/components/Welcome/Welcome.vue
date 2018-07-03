<template>
  <div id="wrapper">
    <Navbar/>
    <WelcomeOptions/>
  </div>

</template>

<script>
import Navbar from '../Navbar/Navbar';
import WelcomeOptions from './WelcomeOptions.vue';

export default {
  name: 'Welcome',
  components: {
    Navbar,
    WelcomeOptions,
  },
};
</script>

<style scoped>
#wrapper {
  display: flex;
  height: 100vh;
  color: #ffffff;
  flex-direction: column;
  background-color: #0a3d62;
}
@import '../../assets/styles/global.css';
</style>
