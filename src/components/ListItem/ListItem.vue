<template>
  <div id="wrapper">
    <div id="list-item-container">
      <list-item-image/>
      <list-item-content/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import ListItemImage from './ListItemImage';
import ListItemContent from './ListItemContent';
import Footer from '../Footer/Footer';

export default {
  name: 'ListItem',
  components: {
    ListItemImage,
    ListItemContent,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#wrapper {
  height: 100vh;
}
#list-item-container {
  display: flex;
  position: relative;
  text-align: center;
  margin: 0 auto;
  width: 95%;
}
</style>
