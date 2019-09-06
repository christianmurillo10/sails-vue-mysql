import Vue from "vue";
import "./components";
import "./plugins";
import { sync } from "vuex-router-sync";
import App from "./App";
import router from "@/router";
import store from "@/store";
import Axios from "axios";
import _ from 'lodash'

// let configJson = fetch("/config/configuration.json").then(resp => {
//   return resp.json();
// });

// const requests = [configJson];

// Promise.all(requests)
//   .then(results => {
//     let urlData = results[0];
//     store.commit("setting/setUrlData", urlData);
//   })
//   .catch(err => {
//     console.log(err + " error in configuration.json");
//   });

sync(store, router);

// set token
Vue.prototype.$http = Axios;

const token = localStorage.getItem("token");

if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
