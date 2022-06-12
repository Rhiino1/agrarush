<template>
  <v-row>
    <v-col cols="2"> </v-col>
    <v-col>
      <div id="map" class="map"></div>
      <!-- <GmapMap
        ref="mapRef"
        :center="{ lat: 4.63257, lng: -74.081228 }"
        :zoom="10"
        map-type-id="hybrid"
        class="map"
      >
      </GmapMap> -->
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import { getGoogleMapsAPI } from 'gmap-vue'
import { helpers } from 'gmap-vue'
const { googleMapsApiInitializer } = helpers

export default {
  name: 'MapPage',
  components: {},
  data() {
    return {
      directionsService: {},
      directionsDisplay: {},
      map: {},
      origin: {},
      destination: {},
    }
  },
  computed: {
    ...mapState({}),
    google: getGoogleMapsAPI,
  },
  created() {},
  mounted() {
    googleMapsApiInitializer(
      {
        key: 'AIzaSyCF28xgI1Sh4hgRCFTiRKoWY_1ZRB6rLCU',
        libraries: 'places',
      },
      false
    )

    this.loadMap()
  },
  methods: {
    ...mapActions({}),
    async loadMap() {
      await this.$gmapApiPromiseLazy()
      console.log(google)
      this.directionsService = new google.maps.DirectionsService()
      this.directionsDisplay = new google.maps.DirectionsRenderer()
      // parque simon bolivar
      this.origin = { lat: 4.658383846282959, lng: -74.09394073486328 }
      // Parque la 93
      this.destination = { lat: 4.676802158355713, lng: -74.04825592041016 }

      const mapEle = document.getElementById('map')
      // create map
      this.map = new google.maps.Map(mapEle, {
        center: this.origin,
        zoom: 12,
        mapTypeId: 'hybrid',
      })

      this.directionsDisplay.setMap(this.map)

      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        mapEle.classList.add('show-map')
        this.calculateRoute()
      })
    },

    calculateRoute() {
      this.directionsService.route(
        {
          origin: this.origin,
          destination: this.destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.directionsDisplay.setDirections(response)
          } else {
            alert('Could not display directions due to: ' + status)
          }
        }
      )
    },
  },
}
</script>

<style scoped>
.map {
  width: 90vw;
  height: 80vh;
}

.show-map {
  opacity: 1;
}
</style>