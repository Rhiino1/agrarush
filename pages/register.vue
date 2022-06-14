<template>
  <!-- <Register /> -->
  <v-container >
    <div class="d-flex align-center justify-center mt-16">
      <v-col class="bg d-flex flex-column justify-center">
        <h1 class="font-italic login-text white--text font-weight-medium pl-16">
          Datos de usuario
        </h1>
        <v-col class="login-items pl-16" cols="10">
          <v-text-field
            name="nombre"
            label="Nombre"
            prepend-icon="mdi-account"
            solo
            rounded
            dense
          ></v-text-field>
          <v-text-field
            name="email"
            label="Email"
            prepend-icon="mdi-email"
            solo
            rounded
            dense
          ></v-text-field>
          <v-text-field
            name="cel"
            label="Teléfono"
            prepend-icon="mdi-cellphone"
            solo
            rounded
            dense
          ></v-text-field>
          <v-text-field
            name="cargo"
            label="Cargo"
            prepend-icon="mdi-account-details"
            solo
            rounded
            dense
          ></v-text-field>
          <v-text-field
            name="password"
            label="Contraseña"
            prepend-icon="mdi-lock"
            solo
            rounded
            dense
          ></v-text-field>
          <v-text-field
            name="passwordConfirm"
            label="Confirmar contraseña"
            prepend-icon="mdi-lock"
            solo
            rounded
            dense
          ></v-text-field>
        </v-col>
      </v-col>
      <v-col class="second-bg d-flex flex-column" cols="6">
        <h1 class="font-italic login-text2">Datos de la empresa</h1>
        <v-col class="login-items login-items-2" cols="10">
          <v-text-field
            name="nombreEmpresa"
            label="Nombre de la empresa"
            prepend-icon="mdi-domain"
            filled
          ></v-text-field>
          <v-text-field
            name="tipoEmpresa"
            label="Tipo de la empresa"
            prepend-icon="mdi-apps"
            filled
          ></v-text-field>
          <v-btn color="red" class="send-btn white--text font-italic"
            >Enviar</v-btn
          >
        </v-col>
      </v-col>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'RegisterPage',
}
</script>

<style scoped>
.login-text {
  /* margin-bottom: 100px; */
}

.login-text2 {
  margin-top: 40px;
  margin-left: 50px;
  padding-bottom: 50px;
}

.login-items-2 {
  margin-left: 50px;
  /* margin-bottom: 121px; */
  padding-bottom: 50px;
}

.login-items {
  /* padding-top: 100px; */
  /* padding-bottom: 150px; */
  /* padding-left: 100px; */
}

.send-btn {
  margin-left: 350px;
  margin-top: 120px;
}
.bg {
  height: 500px;
  background: #d72428;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* border-radius: 15px; */
}

.second-bg {
  background: center / contain no-repeat url('/bg-register.png');
  /* background-size: cover; */
}
</style>
