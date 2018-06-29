<template functional>
  <div class="cart-item">

        <p>{{props.item.name}} - {{props.item.price}}</p>
        <div class="form-life">
          <button class="arrow-up" id="increase" @click="props.quantityToggle(props.item.id, 1), props.subTotal()" >+</button>
<p>
    {{props.item.quantity}}
</p>
  <button class="arrow-down" id="decrease"  @click="props.quantityToggle(props.item.id, -1), props.subTotal()" >-</button>
</div>

  </div>
</template>
<style>
.cart-item {
display: flex;
flex-direction: row;
height: 8vh;
width: 70vw;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
margin: 1vh;
padding: 5px;
background-color: white;

}

.form-life{
display: flex;
flex-direction: column;
width: 10px;
margin-top: 10px;
}

.arrow-up {
  width: 0;
height: 0;
border-left: 10px solid transparent;
border-right: 10px solid transparent;

border-bottom: 10px solid black;
}
.arrow-down {
  width: 0;
height: 0;
border-left: 10px solid transparent;
border-right: 10px solid transparent;

border-top: 10px solid black;
}

.value-button {

}

.value-button:hover {
  cursor: pointer;
}

</style>
