<template>
  <div>
    <MapsNavbar />
    <div
      v-if="getLongitude == 0"
      id="spinner-container">
      <rise-loader
        :color="color"/>
    </div>
    <GmapMap
      v-if="getLongitude !== 0"
      :center="{lat:getLatitude, lng:getLongitude}"
      :zoom="15"
      map-type-id="terrain"
      style="width: 100%; height: 850px"
    >
      <GmapMarker
        v-for="(item, index) in getRestaurants"
        :key="index"
        :position="{lat: Number(item.latitude), lng: Number(item.longitude)}"
        :clickable="true"
        :draggable="true"
        @click="handleClickRestaurant(item)"
      />
    </GmapMap>
    <sweet-modal
      ref="map"
      :enable-mobile-fullscreen="false"
    >
      <div id="modal-wrapper">
        <div id="resto-name">
          <h3>{{ name }}</h3>
        </div>
        <img
          id="resto-image"
          :src="image"
        >
        <div id="resto-description">
          <p class="descriptionMaps">{{ description }}</p>
        </div>
      </div>
      <button
        id="resto-button"
        @click="selectRestaurant()">Go to {{ name }}!</button>
    </sweet-modal>
  </div>
</template>

// TODO: refactor all of this, fix spinner position

<script>
import MapModal from './MapModal';
import RiseLoader from 'vue-spinner/src/RiseLoader.vue';
import MapsNavbar from './MapsNavbar.vue';

export default {
  name: 'Maps',
  components: {
    MapsNavbar,
    RiseLoader,
    MapModal,
  },
  data() {
    return {
      loading: false,
      name: '',
      image: '',
      description: '',
      color: '#ff5555',
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
    if (!this.$store.state.customer.id) {
      this.$router.push('/');
    }
    await this.$store.dispatch('getLocation');
    await this.$store.dispatch('getRestaurant');
  },
  methods: {
    handleClickRestaurant(item) {
      this.name = item.name;
      this.image = item.photos[0].url;
      this.description = item.description;
      this.restaurantSelected = item;
      this.$refs.map.open(item);
    },
    selectRestaurant() {
      this.$store.commit(
        'mutateRestaurant',
        this.restaurantSelected
      );
      this.$router.push('/welcome');
    },
  },
};
</script>

<style scoped>
#wrapper {
  display: flex;
  height: 100vh;
  width: 100%;
}
.descriptionMaps {
  width: 90%;
  height: 50px;
  margin: 0 auto;
  overflow: hidden;
  font-weight: 400;
  font-size: 0.9em;
  white-space: wrap;
  font-family: Raleway;
  text-overflow: ellipsis;
}
#modal-wrapper {
  width: 90%;
  display: flex;
  margin: 0 auto;
  text-align: left;
  flex-direction: column;
}
#resto-image {
  height: 25vh;
  border-radius: 4px;
}
#resto-name {
  text-align: center;
  margin-bottom: 10px;
}
#resto-description {
  margin: 10px 0;
  font-weight: 200;
  font-size: 0.8em;
}
#resto-button {
  width: 100%;
  height: 40px;
  font-weight: 600;
  font-size: 0.9em;
  color: #ffffff;
  font-family: Raleway;
  background-color: #ff5555;
  border: 1px #ff5555 solid;
}
#spinner-container {
  display: flex;
  justify-content: center;
  margin-top: 250px;
}
#spinner {
  color: #ff5555;
}
@import '../../assets/styles/global.css';
</style>
