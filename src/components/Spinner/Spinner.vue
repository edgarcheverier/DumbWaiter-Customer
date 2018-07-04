<template>
  <Spinner 
    id="spinner"/>
</template>

<script>
import CubeSpin from '../../../node_modules/vue-loading-spinner/src/components/Circle2.vue';
export default {
  name: 'Spinner',
};
</script>

<style scoped>
#spinner {
  height: 70px;
  width: 70px;
  color: papayawhip;
}
@import '../../assets/styles/global.css';
</style>
