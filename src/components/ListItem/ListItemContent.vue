<template functional>
  <div class="list-item-wrap">
    <div class="list-item-content">
      <h1 id="list-item-header">{{ props.name }}</h1>
      <!--  <p id="list-item-slugline">{{ props.description }}</p> -->
    </div>
    <p id="list-item-price">{{ props.price }} €</p>
  </div>

</template>
<script>
</script>

<style>
.list-item-content {
  position: absolute;
  color: #fff;
  width: 100%;
  margin: 0 auto;
  top: 23%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#list-item-header {
  font-family: Raleway;
  font-weight: 600;
  font-size: 2em;
  margin-bottom: 1px;
  margin-top: 25px;
}
#list-item-slugline {
  width: 350px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Raleway;
  font-weight: 400;
  font-size: 1em;
}
#list-item-price {
  position: absolute;
  font-family: Raleway;
  font-weight: 500;
  font-size: 1.2em;
  color: #fff;
  top: 80%;
  left: 5%;
}
</style>
