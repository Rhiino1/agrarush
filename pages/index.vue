<template>
  <v-container grid-list-xs>
    <div class="bg">
      <v-img contain src="~/assets/index-bg.png"></v-img>
    </div>
    <div class="main-index">
      <div class="main-part-index">
        <div>
          <h2 class="grey--text darken-2 font-weight-light">AgraRush</h2>
          <h1 class="red--text">
            Logística y Eficiencia <br />
            <span class="black--text">Software</span>
          </h1>
          <p>Planeación de análisis de datos y evaluación de la eficiencia</p>
        </div>
        <div>
          <v-img contain src="~/assets/image-6.png"></v-img>
        </div>
      </div>
      <div class="second-part-index">
        <div>
          <h2>Servicios</h2>
          <p>
            Calcula costos y huella ambiental. Sugiere nuevos centros de
            distribución
          </p>
        </div>
        <div>
          <h2>Características</h2>
          <p>Modelo de Software as a Service. Modelo K-means</p>
        </div>
        <div>
          <h2>Beneficios</h2>
          <p>
            Mapa interactivo con las geolocalizaciones por cliente. Control de
            tu base de datos y evaluación de la eficiencia
          </p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'IndexPage',
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
      loggedIn: (state) => state.loggedIn,
      allImages: (state) => state.allImages,
    }),
  },
  mounted() {},
  methods: {
    ...mapActions({}),
  },
}
</script>

<style scoped>
.bg {
  position: absolute;
  z-index: -1;
  top: 0px;
  left: 344px;
}

.main-index {
  margin-top: 80px;
}

.main-part-index {
  display: flex;
  justify-content: center;
  align-items: center;
}

.second-part-index {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 237px;
}
</style>