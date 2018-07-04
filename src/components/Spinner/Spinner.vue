<template>
  <pulse-loader 
    :loading="loading" 
    :color="color" 
    :size="size"/>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
export default {
  name: 'Spinner',
  components: {
    PulseLoader,
  },
};
</script>

<style scoped>
@import '../../assets/styles/global.css';
</style>
