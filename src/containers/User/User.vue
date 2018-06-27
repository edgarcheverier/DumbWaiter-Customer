<template>
  <div>
    <nav class="usernav">
      <div class="nav-wrapper">
        <h6 class="brand-logo center userTitle">{{ getName }}</h6>
        <ul class="left">
          <li>
            <button @click="goBack">
              <i class="material-icons rightIcon">chevron_left</i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <div class="center">
      <a
        :style="userImage"
        class="btn-floating btn-large waves-effect waves-light userImage z-depth-1"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  data: function() {
    return {
      userImage: {
        backgroundImage: `url(http://graph.facebook.com/${
          this.$store.state.customer.id
        }/picture?type=large)`,
        backgroundSize: '100%',
      },
    };
  },
  computed: {
    getName() {
      return this.$store.state.customer.name;
    },
  },
  methods: {
    goBack() {
      this.$router.push('/Welcome');
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'User.css';
</style>
