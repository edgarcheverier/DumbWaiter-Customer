<template>
  <div id="navbar-container">
    <button @click="goBack">
      <ion-icon 
        id="back-button" 
        name="arrow-back"/>
    </button>
  </div>
  
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    goBack() {
      this.$router.push('/Welcome');
    },
  },
};
</script>

<style>
#navbar-container {
  display: flex;
  height: 50px;
  background-color: #0a3d62;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
}
#back-button {
  margin-left: 10px;
  font-size: 2em;
  color: #fff;
}
</style>
