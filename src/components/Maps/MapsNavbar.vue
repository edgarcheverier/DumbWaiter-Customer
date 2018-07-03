<template>
  <div id="mapnavbar-container">

    <div id="mapnavbar-content">
      <p class="title"> Dumbwaiter  </p>
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

<style>
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
  margin: 0 auto;
  display: flex;
  font-weight: 700;
  font-family: Raleway;
  justify-content: center;
  align-items: center;
}
.title {
  font-weight: 600;
  color: #eb2f06;
  font-size: 1.3em;
}
</style>
