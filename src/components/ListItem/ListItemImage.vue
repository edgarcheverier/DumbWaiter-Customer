<template>
  <div id="list-item-contain">
    <div id="item-overlay"/>
    <img 
      id="list-image"
      src="https://images.unsplash.com/photo-1518646261099-bd070a676912?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4948465739b5a76034aae5380d2f8b67&auto=format&fit=crop&w=1650&q=80" 
      alt="food">
  </div>

</template>

<script>
export default {
  name: 'ListItemImage',
  components: {},
};
</script>

<style>
#item-overlay {
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  width: 100%;
  height: 180px;
  margin: 10px 0;
  border-radius: 4px;
}
#list-image {
  width: 100%;
  height: 180px;
  margin: 10px 0;
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15),
    0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>
