<template functional>
  <div class="contain">
    <div class="foodDrinksContainer">
      <div class="buttonsLabel">
        <button 
          class="btn-floating btn-large waves-effect waves-light cyan z-depth-4" 
          @click="props.handleClickFood('Food')"><i class="material-icons">local_dining</i></button>
        <label class="labelClass">Food</label>
      </div>
      <div class="buttonsLabel">
        <button 
          class="btn-floating btn-large waves-effect waves-light cyan z-depth-4" 
          @click="props.handleClickFood('Drinks')"><i class="material-icons">local_bar</i></button>
        <label class="labelClass">Drinks</label>
      </div>
    </div>
    <div class="dessertsContainer">
      <div class="buttonsLabel">
        <button 
          class="btn-floating btn-large waves-effect waves-light cyan z-depth-4" 
          @click="props.handleClickFood('Desserts')"><i class="material-icons">cake</i></button>
        <label class="labelClass">Desserts</label>
      </div>
    </div>
    <div class="waiterContainer">
      <div class="buttonsLabel">
        <button 
          class="btn-floating btn-large waves-effect waves-light z-depth-4 blue lighten-1" 
          @click="props.tableButton"
        ><i class="material-icons">border_outer</i></button>
        <label class="labelClass">{{ props.userKey }}</label>
      </div>
      <div class="buttonsLabel">
        <button 
          class="btn-floating btn-large waves-effect waves-light z-depth-4  teal accent-4 lighten-1" 
          @click="props.handleClickWaiter"><i class="material-icons">face</i></button>
        <label class="labelClass">Waiter</label>
      </div>
    </div>
  </div>
</template>
