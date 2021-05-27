import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//install BOOTSTRAP
import "jquery";
import "popper.js/dist/popper.min.js";
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/flaticon/font/flaticon.css';
import './assets/flaticon/font/flaticon.scss';

// Vue.component('Price',require('../src/components/home/Price.vue').default)

//install VueRellax
import VueRellax from "vue-rellax";
Vue.use(VueRellax);

//install Axios
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

// install carousel
import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);

// VueSplide
import VueSplide from "@splidejs/vue-splide";
Vue.use(VueSplide);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  
  render: (h) => h(App),
}).$mount("#app");
