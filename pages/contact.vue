<template>
  <v-container grid-list-xs>
    <div class="main-services d-flex justify-center align-center">
      <div class="bg">
        <v-img contain src="../services-bg.png"></v-img>
      </div>
      <div class="d-flex flex-column align-center justify-center">
        <h1 class="white--text font-italic font-weight-medium">Contacto</h1>
        <div class="d-flex flex-column align-center justify-center">
          <v-text-field
            name="email"
            label="Email"
            prepend-icon="mdi-email"
            solo
          ></v-text-field>
          <v-text-field
            name="nombre"
            label="Nombre"
            prepend-icon="mdi-domain"
            solo
          ></v-text-field>
          <v-text-field
            name="cel"
            label="Telefono"
            placeholder="+57 313 238 39 20"
            prepend-icon="mdi-cellphone"
            solo
          ></v-text-field>
        </div>
      </div>
      <div class="d-flex flex-column align-center justify-center coms">
        <h1 class="white--text font-italic mb-5 font-weight-medium">
          Dejanos tus comentarios
        </h1>
        <v-col cols="12" class="mb-3">
          <v-textarea
            name="Comentarios"
            label="Comentarios"
            clearable
            no-resize
            rows="5"
            row-height="15"
            background-color="white"
            solo
            rounded
            width="300"
          ></v-textarea>
        </v-col>
        <v-btn color="white" outlined small class="mt-n9 send-btn"
          >Enviar</v-btn
        >
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

.coms {
  width: 410px;
}

.send-btn {
  position: relative;
  left: 145px;
}

.main-services {
  margin-top: 100px;
  gap: 300px;
}
</style>