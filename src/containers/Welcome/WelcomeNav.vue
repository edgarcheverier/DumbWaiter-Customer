<template functional>
  <nav>
    <div class="nav-wrapper">
      <h6 class="brand-logo center">Dumbwaiter</h6>
      <div class="left">
        <a
          :style="props.userImage"
          class="btn-floating btn-large waves-effect waves-light imageTag z-depth-1"
          @click="props.goToUser"/>
      </div>
      <ul class="right">
        <li>
          <button @click="props.goCheckout">
            <i class="material-icons rightIcon" >local_grocery_store</i>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
