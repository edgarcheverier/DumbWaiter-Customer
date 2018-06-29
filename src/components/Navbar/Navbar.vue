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
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 50px;
  background-color: #0a3d62;
  justify-content: flex-start;
  /* opacity: 0.9; */
}
#back-button {
  margin-left: 12px;
  font-size: 2.1em;
  color: #fff;
}
</style>
