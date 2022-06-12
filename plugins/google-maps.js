import Vue from 'vue'
import GmapVue from '~/node_modules/gmap-vue'

Vue.use(GmapVue, {
  load: {
    key: "AIzaSyCF28xgI1Sh4hgRCFTiRKoWY_1ZRB6rLCU",
    libraries: "places"
  }
});

export default ({ app }, inject) => {
  inject('gApi', GmapVue)
}