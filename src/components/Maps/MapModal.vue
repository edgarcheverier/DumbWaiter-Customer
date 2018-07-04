<template>
  <sweet-modal ref="mapmodal">
    <div class="titleContainer">
      <b>{{ title }}</b>
    </div>
    <div class="imageContainer">
      <img 
        :src="image" 
        class="imageSize">  
    </div>
    <div class="descriptionContainer">
      <b>{{ description }}</b>
    </div>
    <div class="buttonContainer">
      <button 
        class="buttonStyle" 
        @click="selectRestaurant">Go to {{ title }} Restaurant</button>
    </div>
  </sweet-modal>
</template>

<script>
export default {
  name: 'MapModal',
  methods: {
    open(item) {
      this.$refs.mapmodal.open();
    },
  },
};
</script>

<style scoped>
.titleContainer {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 10px;
}
.imageContainer {
  display: flex;
  justify-content: center;
}
.imageSize {
  width: 300px;
  height: 170px;
}
.descriptionContainer {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}
.buttonContainer {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}
.buttonStyle {
  color: blue;
}
</style>
