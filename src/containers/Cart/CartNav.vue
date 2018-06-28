<template functional>
  <nav>
    <div class="nav-wrapper">
      <h6 class="brand-logo center">{{ props.menuTitle }}</h6>
      <ul class="left">
        <li>
          <button @click="props.goBack">
            <i class="material-icons leftIcon">chevron_left</i>
          </button>
        </li>
      </ul>
      <ul class="right">
        <li>
          <button @click="props.goCheckout">
            <i class="material-icons rightIcon">local_grocery_store</i>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
