<template>
  <v-container fluid>
    <v-row class="flex-nowrap">
      <v-col cols="3" class="info-div">
        <div class="d-flex flex-column">
          <h1 class="white--text mb-16 font-italic">Ruta a evaluar</h1>
          <gmap-autocomplete
            @place_changed="setInicio"
            :options="{
              componentRestrictions: { country: 'co' },
            }"
          >
            <template v-slot:default="slotProps">
              <v-text-field
                outlined
                prepend-inner-icon="mdi-map-marker"
                placeholder="Punto de salida"
                ref="input"
                v-on:listeners="slotProps.listeners"
                v-on:attrs="slotProps.attrs"
                background-color="white"
                rounded
                class="black--text"
              >
              </v-text-field>
            </template>
          </gmap-autocomplete>
          <gmap-autocomplete
            class="introInput"
            slot-ref-name="input2"
            @place_changed="setFin"
            :options="{
              componentRestrictions: { country: 'co' },
            }"
          >
            <template v-slot:default="slotProps">
              <v-text-field
                outlined
                prepend-inner-icon="mdi-map-marker"
                placeholder="Punto de llegada"
                ref="input2"
                v-on:listeners="slotProps.listeners"
                v-on:attrs="slotProps.attrs"
                background-color="white"
                rounded
                class="black--text"
              >
              </v-text-field>
            </template>
          </gmap-autocomplete>
        </div>
      </v-col>
      <v-col>
        <div id="map" class="map"></div>
        <div id="indicators"></div>
      </v-col>
    </v-row>
  </v-container>
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
      origin: { lat: 4.658383846282959, lng: -74.09394073486328 },
      defaultBounds: {},
      destination: {},
      inicio: '',
      final: '',
    }
  },
  computed: {
    ...mapState({}),
    google: getGoogleMapsAPI,
  },
  created() {},
  mounted() {
    this.defaultBounds = {
      north: this.origin.lat + 1,
      south: this.origin.lat - 1,
      east: this.origin.lng + 1,
      west: this.origin.lng - 1,
    }
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

      const mapEle = document.getElementById('map')
      const indicatorsEle = document.getElementById('indicators')
      // create map
      this.map = new google.maps.Map(mapEle, {
        center: this.origin,
        zoom: 12,
        mapTypeId: 'hybrid',
      })

      this.directionsDisplay.setMap(this.map)
      this.directionsDisplay.setPanel(indicatorsEle)

      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        mapEle.classList.add('show-map')
        // this.calculateRoute()
      })
    },

    calculateRoute() {
      this.directionsService.route(
        {
          origin: {
            location: {
              lat: this.inicio.geometry.location.lat(),
              lng: this.inicio.geometry.location.lng(),
            },
          },
          destination: {
            location: {
              lat: this.final.geometry.location.lat(),
              lng: this.final.geometry.location.lng(),
            },
          },
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
    setInicio(place) {
      console.log(place)
      this.inicio = place
    },
    setFin(place) {
      console.log(place)
      this.final = place

      if (this.inicio) {
        this.calculateRoute()
      }
    },
  },
}
</script>

<style scoped>
.div-container {
  width: 100vw;
  height: 80vh;
}
.map {
  width: 100%;
  height: 80vh;
}

.show-map {
  opacity: 1;
}

.info-div {
  background: #d72428;
}

#indicators {
  /* padding: 16px;
  height: 40%;
  width: 100%;
  overflow-y: auto;
  display: block; */
}
</style>