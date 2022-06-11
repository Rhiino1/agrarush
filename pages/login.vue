<template>
  <v-container fluid>
    <div class="d-flex align-center justify-center mt-16">
      <v-col>
        <h1 class="font-italic login-text">Iniciar Sesión</h1>
        <v-col class=" login-items" cols="10">
          <v-text-field
            name="email"
            label="Email"
            prepend-icon="mdi-account"
            solo
            rounded
          ></v-text-field>
          <v-text-field
            name="password"
            label="Contraseña"
            prepend-icon="mdi-lock"
            solo
            rounded
          ></v-text-field>
          <v-btn color="red" class="send-btn white--text font-italic">Iniciar Sesión</v-btn>
        </v-col>
      </v-col>
      <v-col>
        <v-row class="bg d-flex justify-center align-center">
          <div class="logo-bg d-flex justify-center align-center">
            <v-img contain src="/logo.png" height="125"></v-img>
          </div>
        </v-row>
      </v-col>
    </div>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'app-login',
  data() {
    return {
      username: '',
      password: '',
      ruta: '',
    }
  },
  computed: {
    ...mapState({
      loginInfo: (state) => state.loginInfo,
      user: (state) => state.user,
      loggedIn: (state) => state.loggedIn,
    }),
  },
  methods: {
    ...mapActions({
      fetchLogin: 'fetchLogin',
    }),

    async login() {
      var response = await this.fetchLogin({
        username: this.username,
        password: this.password,
      })

      if (this.loggedIn) {
        this.$router.push('/')
      }
    },
  },
  mounted() {},
}
</script>

<style lang="css" scoped>

.login-text{
  /* margin-bottom: 100px; */
}

.login-items{
  padding-top: 100px;
  padding-bottom: 150px;
  /* padding-left: 100px; */
}

.send-btn{
  margin-left: 275px;
}
.bg {
  height: 528px;
  background: #d72428;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.logo-bg{
  height: 221px;
  background: #ffffff;
  border-radius: 15px;
}
</style>
