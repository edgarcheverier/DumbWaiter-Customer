<template functional>
  <div class="cart-item">

        <p>{{props.item.name}} - {{props.item.price}}x{{props.item.quantity}} {{props.item.price*props.item.quantity}}</p>
        <form>
  <div class="value-button" id="decrease"  @click="props.quantityToggle(props.item.id, -1), props.subTotal()" value="Decrease Value">-</div>
  <div type="number">{{props.item.quantity}}</div>
  <div class="value-button" id="increase" @click="props.quantityToggle(props.item.id, 1), props.subTotal()" value="Increase Value">+</div>
</form>

  </div>
</template>
<style>
.cart-item {
height: 20vh;
width: 80vw;

}

.value-button {
  display: inline-block;
  border: 1px solid #ddd;
  width: 40px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  padding: 11px 0;
  background: #eee;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.value-button:hover {
  cursor: pointer;
}

</style>
