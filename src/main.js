import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";


Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyCl4PHDwl-pYoBYhNW5x3otElJAyjXq3aU",
        libraries: "places" // necessary for places input
    }
});

new Vue({
  render: h => h(App)
}).$mount('#app')
