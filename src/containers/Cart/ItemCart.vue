<template functional>
  <div class="row">
    <div class="col s12 m6">
      <div class="card">
        <p>{{props.item.name}} - {{props.item.quantity}} - {{props.item.price}}</p>
        <form>
  <div class="value-button" id="decrease"  value="Decrease Value">-</div>
  <input type="number" id="number" value="0" />
  <div class="value-button" id="increase" value="Increase Value">+</div>
</form>
      </div>
    </div>
  </div>
</template>
