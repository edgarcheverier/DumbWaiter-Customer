<template functional>
  <div id="list-item-contain">
    <div id="item-overlay"/>
    <img
      id="list-image"
      :src="props.image"
      alt="food">
  </div>

</template>

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
