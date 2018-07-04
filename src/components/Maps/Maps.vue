<template>
  <div class="wrapper">
    <Navbar />
    <GmapMap
      :center="{lat:getLatitude, lng:getLongitude}"
      :zoom="15"
      map-type-id="terrain"
      style="width: 100%; height: 750px">
      <GmapMarker
        v-for="(item, index) in getRestaurants"
        :key="index"
        :position="{lat: Number(item.latitude), lng: Number(item.longitude)}"
        :clickable="true"
        :draggable="true"
        @click="handleClickModal(item)"
      />
    </GmapMap>
    <MapModal 
      ref="modal"/>
  </div>
</template>

<script>
import Navbar from '../Navbar/Navbar.vue';
import MapModal from './MapModal';
export default {
  name: 'Maps',
  components: {
    Navbar,
    MapModal,
  },
  data() {
    return {
      title: '',
      image: '',
      description: '',
      restaurantSelected: {},
    };
  },
  computed: {
    getLatitude() {
      return this.$store.state.latitude;
    },
    getLongitude() {
      return this.$store.state.longitude;
    },
    getRestaurants() {
      return this.$store.state.allRestaurants;
    },
  },
  async beforeCreate() {
    await this.$store.dispatch('getLocation');
    await this.$store.dispatch('getRestaurant');
    console.log(
      'all restaurants state',
      this.$store.state.allRestaurants
    );
  },
  methods: {
    beforeOpen(event) {},
    beforeClose(event) {
      console.log(event);
      // If modal was open less then 5000 ms - prevent closing it
    },
    selectRestaurant() {
      this.$store.commit(
        'mutateRestaurant',
        this.restaurantSelected
      );
      console.log(
        'restaurant Selected ',
        this.restaurantSelected
      );
      this.$router.push('/Welcome');
    },
    handleClickModal(item) {
      this.$refs.modal.open();
    },
    showRestaurant(item) {
      this.$modal.show('rest');
      this.title = item.name;
      this.image = item.photos[0].url;
      this.description = item.description;
      this.restaurantSelected = item;
    },
    hideModal() {
      this.$modal.hide('rest');
    },
  },
};
</script>



<style scoped>
div.v--modal-box.v--modal {
}
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
