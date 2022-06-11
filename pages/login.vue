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
  <!-- <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card elevation="0" class="primary">
          <div class="text-center">
            <h1 class="mb-2">Log in</h1>
          </div>
          <v-img class="mx-auto" src="/login.png" />

          <v-card-text>
            <v-form>
              <v-text-field
                label="Enter your username"
                name="username"
                prepend-inner-icon="mdi-account"
                type="text"
                class="rounded-0"
                background-color="primary"
                outlined
                color="light"
                v-model="username"
              ></v-text-field>
              <v-text-field
                label="Enter your password"
                name="password"
                prepend-inner-icon="mdi-lock"
                type="password"
                background-color="primary"
                class="rounded-0"
                outlined
                color="light"
                v-model="password"
              ></v-text-field>
              <v-btn
                class="rounded-0 accent"
                color="#000000"
                x-large
                block
                dark
                @click="login"
                >Login
              </v-btn>
              <v-card-actions class="justify-center text-subtitle-2">
                Don't have an account yet?
                <NuxtLink
                  class="pl-2 ml-6"
                  style="color: #ffffff"
                  to="/register"
                  >Sign Up
                </NuxtLink>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container> -->
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
