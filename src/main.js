import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { VueCsvImportPlugin } from "../node_modules/vue-csv-import";

Vue.use(VueCsvImportPlugin);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')