<template>
  <div class="list-item-wrap">
    <div class="list-item-content">
      <h1 id="list-item-header">Asian Soup Bowl</h1>
      <p id="list-item-slugline">Boudin chicken fatback, jerky</p>
    </div>
    <p id="list-item-price">7,19 €</p>
  </div>

</template>

<script>
export default {
  name: 'ListItemContent',
  components: {},
};
</script>

<style>
.list-item-content {
  position: absolute;
  color: #fff;
  width: 100%;
  margin: 0 auto;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#list-item-header {
  font-family: Raleway;
  font-weight: 600;
  font-size: 2em;
  margin-bottom: 5px;
  margin-top: 10px;
}
#list-item-slugline {
  font-family: Raleway;
  font-weight: 600;
  font-size: 1em;
}
#list-item-price {
  position: absolute;
  font-family: Raleway;
  font-weight: 600;
  font-size: 1.2em;
  color: #fff;
  top: 75%;
  left: 5%;
}
</style>
