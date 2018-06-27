<template>
  <div class="contain">
    <div class="rowing">
      <div class="column">
        <div class="card-image">
          <img 
            class="card-image-hero" 
            src="https://images.unsplash.com/photo-1518646261099-bd070a676912?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4948465739b5a76034aae5380d2f8b67&auto=format&fit=crop&w=1650&q=80" 
            alt="soup bowl, asian">
        </div>
      </div>
    </div>
    <div class="rowing">
      <div class="column">
        <div class="card-content">
          <h1>Asian Soup Bowl - 9,67 €</h1>
          <p>Boudin chicken fatback, jerky ground round chuck bacon sausage tenderloin turducken swine drumstick salami ball tip. </p>
          <button class="order">Order</button>
          <i class="up small material-icons">chevron_left</i>
          <i class="down small material-icons">chevron_right</i>
          
        </div>
      </div>
    </div>
    <hr class="break">
    <carousel-list/>
    <footer class="footer">
      <p class="footer-checkout">Go to checkout</p>
      <p class="footer-price">9,67 €</p>
    </footer>
  </div>
</template>

<script>
import CarouselList from '../Carousel/Carousel.vue';

export default {
  name: 'ListCard',
  components: {
    CarouselList,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  background-color: #fff;
}
.contain {
  margin: 0 auto;
  height: 1000px;
}
.rowing {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.column {
  flex: 1;
}
.card-image-hero {
  height: 250px;
}
.card-content {
  margin: 20px;
}
.card-content h1 {
  font-family: Raleway;
  font-weight: 300;
  font-size: 1.7em;
  margin-bottom: 10px;
}
.card-content p {
  font-family: Merriweather;
  font-weight: 300;
  font-size: 0.8em;
}
.break {
  width: 90%;
  align-self: center;
  margin-bottom: 20px;
  margin-left: 20px;
  opacity: 0.4;
}
.order {
  background: #0a3d62;
  border-radius: 4px;
  height: 40px;
  width: 80px;
  align-items: center;
  font-family: Raleway;
  font-weight: 700;
  color: #fff;
  margin-left: 255px;
}
.btn-contain {
  width: 100%;
  height: 100px;
  justify-content: space-around;
}
.increment {
  height: 30px;
  width: 40px;
  background-color: #0a3d62;
  align-items: center;
  margin: 5px;
}
i {
  background-color: #0a3d62;
  color: #fff;
  padding: 5px;
  border-radius: 4px;
}
.up {
  margin-right: 5px;
}
.item-up {
  margin-left: 3px;
}
.footer {
  width: 100%;
  height: 50px;
  background-color: #0a3d62;
  justify-content: space-between;
}
.footer-checkout {
  background-color: inherit;
  margin-left: 20px;
  color: #fff;
  font-family: Raleway;
  font-weight: 700;
}
.footer-price {
  background-color: inherit;
  margin-right: 20px;
  color: #fff;
  font-family: Raleway;
  font-weight: 700;
}
</style>
