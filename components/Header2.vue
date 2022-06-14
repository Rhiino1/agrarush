<template>
  <v-toolbar flat prominent color="transparent">
    <v-toolbar-title>
      <v-img contain src="logo.png" height="125"></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only d-flex justify-center align-center">
      <div v-for="(item, index) in menuItems" :key="index">
        <v-btn text :to="item.path" v-if="index !== menuItems.length - 1">
          <v-icon left dark v-if="item.icon != ''">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn :to="item.path" v-else class="ml-2" color="white">
          {{ item.title }}
        </v-btn>
      </div>
    </v-toolbar-items>
    <v-navigation-drawer v-model="sidebar">
      <v-list>
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.path"
        >
          <v-list-item-icon v-if="item.icon != ''">
            {{ item.icon }}
          </v-list-item-icon>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-toolbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'app-new-header',
  data() {
    return {
      appTitle: 'Awesome App',
      sidebar: false,
      menuItems: [
        { title: 'Inicio', path: '/', icon: 'mdi-home' },
        { title: 'Servicios', path: '/services', icon: '' },
        { title: 'Contacto', path: '/contact', icon: '' },
        { title: 'Mapa', path: '/map', icon: '' },
        { title: 'Iniciar Sesión', path: '/login', icon: 'mdi-account' },
        { title: 'Registrarse', path: '/register', icon: '' },
      ],
      menuItemsLogged: [
        { title: 'Inicio', path: '/', icon: 'mdi-home' },
        { title: 'Cerrar sesión', path: '/login', icon: 'mdi-account' },
        { title: 'Upload', path: '/uploadImage', icon: 'mdi-image' },
      ],
      searchText: null,
    }
  },
  computed: {
    ...mapState({
      loggedIn: (state) => state.loggedIn,
    }),
  },
  methods: {
    ...mapActions({
      fetchLogOff: 'fetchLogOff',
    }),
    fetchSearch() {
      this.$router.push(`/search/${encodeURIComponent(this.searchText)}`)
    },
    changeMenu(item) {
      console.log(item)
      if (this.loggedIn && item.title === 'Log out') {
        this.fetchLogOff()
        console.log('deslogueado')
      }
      this.$router.push(item.path)
    },
  },
}
</script>