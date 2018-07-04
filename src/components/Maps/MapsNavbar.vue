<template>
  <div id="mapnavbar-container">
    <div id="mapnavbar-content">
      <h1 class="title">Dumbwaiter</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapsNavbar',
  data: function() {
    return {
      currentPath: this.$route.path,
    };
  },
  computed: {
    path() {
      return this.$store.state.navPath;
    },
    amount() {
      return this.$store.state.amount.total.toPrecision(3);
    },
    restaurantName() {
      return this.$store.state.restaurant.name;
    },
  },
  methods: {
    goBack() {
      this.$router.push(this.path);
    },
    goCheckout() {
      this.$router.push('/Cart');
    },
  },
};
</script>

<style >
#mapnavbar-container {
  top: 0;
  background-color: #fff;
  width: 100%;
  height: 50px;
  z-index: 1000;
  display: flex;
  position: sticky;
}
#mapnavbar-content {
  width: 90%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}
.title {
  color: #ff5555;
  font-size: 1.5em;
  font-weight: 600;
  text-transform: uppercase;
}
</style>
