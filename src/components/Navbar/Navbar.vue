<template>
  <div id="navbar-container">
    <button>
      <ion-icon 
        id="back-button" 
        name="arrow-back"/>
    </button>
  </div>
  
</template>

<script>
export default {
  name: 'Navbar',
  components: {},
};
</script>

<style>
#navbar-container {
  display: flex;
  height: 50px;
  background-color: #0a3d62;
  justify-content: flex-start;
}
#back-button {
  margin-left: 10px;
  font-size: 2em;
  color: #fff;
}
</style>
