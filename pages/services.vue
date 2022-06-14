<template>
  <v-container grid-list-xs>
    <div class="main-services d-flex justify-center align-center">
      <div class="bg">
        <v-img contain src="../services-bg.png"></v-img>
      </div>
      <div>
        <h1 class="white--text font-italic">Logística: Camino al desarrollo</h1>
      </div>
      <div class="services-title-bg">
        <p>
          AgraRush es un software de análisis de datos y generación de
          alternativas de mejora en la logística y distribución de productos.
          Está pensado en aquellas empresas con necesidades de gestión de sus
          centros de distribución ya que es una herramienta que evalúa la
          viabilidad de creación de éstos y genera una optimización de sus
          rutas.
        </p>
      </div>
    </div>
    <div class="d-flex flex-column align-center secondary-services">
      <h1 class="mb-10">Servicios</h1>
      <div class="d-flex align-center services-items">
        <div
          class="
            d-flex
            flex-column
            align-center
            justify-center
            services-items-bg
          "
        >
          <p class="font-italic">
            Análisis de datos de tu empresa como: Número de clientes, volúmenes
            de ventas, geolocalización por cliente, rutas utliizadas, CEDIS
            actuales, costos por ruta, flotas y su información técnica.
          </p>
          <v-img contain src="../services-items-1.png" max-height="117"></v-img>
        </div>
        <div
          class="
            d-flex
            flex-column
            align-center
            justify-center
            services-items-bg
          "
        >
          <p class="font-italic">
            A partir de la información suministrada, te permite evaluar la
            viabilidad de creación de nuevos CEDIS y nuevas posibles rutas, sus
            costos logísticos y su huella de carbono.
          </p>
          <v-img contain src="../services-items-2.png" max-height="117"></v-img>
        </div>
        <div
          class="
            d-flex
            flex-column
            align-center
            justify-center
            services-items-bg
          "
        >
          <p class="font-italic">
            AgraRush posee un mapa interactivo y dinámico que te permite ver las
            geolocalizaciones en tiempo real para un seguimiento más seguro de
            tus rutas.
          </p>
          <v-img contain src="../services-items-3.png" max-height="117"></v-img>
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
  background: url('/services-bg.png');
  position: absolute;
  z-index: -1;
  /* top: 0px; */
  /* left: 0px; */
}

.main-services {
  /* position: abs; */
  /* top: -100px; */
  margin-top: 100px;
}

.services-title-bg {
  width: 941px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
}

.services-title-bg p {
  padding: 25px 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.secondary-services{
    margin-top: 150px;
}

.services-items{
    gap: 40px;
}

.services-items-bg {
  background: #f9f8f8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 439px;
  height: 298px;
}

.services-items-bg p {
  padding: 15px 25px 0px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}
</style>