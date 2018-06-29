<template functional>
  <div class="row">
    <div class="col s12 m6">
      <div class="card">
        <p>{{props.item.name}} - {{props.item.price}}x{{props.item.quantity}} {{props.item.price*props.item.quantity}}</p>
        <form>
  <div class="value-button" id="decrease"  @click="props.quantityToggle(props.item.id, -1), props.subTotal()" value="Decrease Value">-</div>
  <div type="number">{{props.item.quantity}}</div>
  <div class="value-button" id="increase" @click="props.quantityToggle(props.item.id, 1), props.subTotal()" value="Increase Value">+</div>
</form>
      </div>
    </div>
  </div>
</template>
