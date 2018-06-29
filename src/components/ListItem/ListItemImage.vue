<template>
  <div 
    id="list-item-contain" >
    <div id="item-overlay"/>
    <img
      id="list-image"
      :src="image"
      alt="food"
    >
  </div>

</template>
<script>
export default {
  name: 'ListItemImage',
  props: {
    image: String,
  },
};
</script>

<style>
#item-overlay {
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  width: 95%;
  height: 180px;
  margin: 10px 9px;
  border-radius: 4px;
}
#list-image {
  width: 95%;
  height: 180px;
  margin: 10px 0;
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15),
    0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>
