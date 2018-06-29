<template functional>
  <nav>
    <div class="nav-wrapper">
      <h6>Dumbwaiter</h6>
      <a
        :style="props.userImage"
        class="btn-floating btn-large waves-effect waves-light imageTag z-depth-1"
        @click="props.goToUser"/>
    </div>
  </nav>
</template>

<style>
.nav-wrapper {
  height: 50px;
  width: 90%;
  margin: 0 auto;
}
h6 {
  font-family: Raleway;
  color: #fff;
  width: 40px;
  font-weight: 300;
  font-size: 1.4em;
  margin-left: 10px;
}
</style>
