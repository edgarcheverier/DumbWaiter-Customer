<template>
  <div class="butt-contain">
    <button class="order">Order</button>
    <p class="count">Count: 1</p>
    <div>
      <button class="chevron-inc">
        <i class="tiny material-icons">remove</i>
      </button>
      <button class="chevron-dec">
        <i class="tiny material-icons">add</i>
      </button> 
    
    </div>
</div></template>

<script>
export default {
  name: 'CardButtons',
  component: {},
};
</script>

<style>
.butt-contain {
  display: flex;
  width: 90%;
  margin: 0 auto !important;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
}
.order {
  background: #0a3d62;
  border-radius: 4px;
  height: 40px;
  width: 80px;
  font-family: Raleway;
  font-weight: 700;
  color: #fff;
  margin-left: 40px;
}
.count {
  font-family: 'Raleway';
  font-size: 0.8em;
  font-weight: 600;
  margin-top: 10px;
  margin-left: 30px;
  align-self: center;
}
.chevron-inc,
.chevron-dec {
  background: #0a3d62;
  border-radius: 4px;
  height: 35px;
  width: 60px;
  align-items: center;
  color: #fff;
}
</style>
