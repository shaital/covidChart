import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "vue-select/dist/vue-select.css";

Vue.use(VueAxios, axios);
Vue.use(require('vue-moment'));
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
