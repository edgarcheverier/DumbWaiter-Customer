<template>
  <list-item />
</template>

<script>
import ListItem from '../../components/ListItem/ListItem';

export default {
  name: 'List',
  components: {
    ListItem,
  },
  computed: {},
  beforeCreate() {
    if (this.$store.state.customer.name == undefined) {
      this.$router.push('/');
    }
  },
  methods: {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  background: #fff;
}
.contain {
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100vh;
}
</style>
