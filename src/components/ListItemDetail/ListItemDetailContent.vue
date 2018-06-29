<template>
  <div id="list-item-detail-content-container">
    <h1 id="content-header">Asian Soup Bowl - 9,67 €</h1>
    <p id="content-description">Boudin chicken fatback, jerky ground round chuck bacon sausage tenderloin turducken swine drumstick salami ball tip.</p>
  </div>
</template>

<script>
export default {
  name: 'ListItemDetailContent',
  components: {},
};
</script>

<style>
#list-item-detail-content-container {
  width: 90%;
  justify-content: center;
  margin: 0 auto !important;
}
#content-header {
  font-weight: 300;
  font-size: 1.7em;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: Raleway;
}
#content-description {
  font-weight: 300;
  font-size: 0.8em;
  font-family: Merriweather;
}
</style>
