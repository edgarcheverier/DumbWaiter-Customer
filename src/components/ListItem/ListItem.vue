<template>
  <div id="wrap-list-item">
    <list-item-image/>
    <list-item-content/>
  </div>
</template>

<script>
import ListItemImage from './ListItemImage';
import ListItemContent from './ListItemContent';

export default {
  name: 'ListItem',
  components: {
    ListItemImage,
    ListItemContent,
  },
};
</script>

<style >
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#wrap-list-item {
  display: flex;
  position: relative;
  text-align: center;
  margin: 0 auto;
  width: 95%;
}
</style>
