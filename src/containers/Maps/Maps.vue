<template>
  <div>
    <GmapMap
      :center="{lat:getLatitude, lng:getLongitude}"
      :zoom="14"
      map-type-id="terrain"
      style="width: 500px; height: 900px"
    >
      <GmapMarker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="test"
      />
    </GmapMap>
  </div>
</template>

<script>
// center=m.position
export default {
  name: 'Maps',
  data() {
    return {
      markers: [
        {
          position: { lat: 41.396321, lng: 2.197905 },
        },
        {
          position: { lat: 41.397311, lng: 2.19695 },
        },
      ],
    };
  },
  computed: {
    getLatitude() {
      return this.$store.state.latitude;
    },
    getLongitude() {
      return this.$store.state.longitude;
    },
  },
  async beforeCreate() {
    await this.$store.dispatch('getLocation');
  },
  methods: {
    test() {
      console.log('hello');
    },
  },
};
</script>



<style scoped>
</style>
