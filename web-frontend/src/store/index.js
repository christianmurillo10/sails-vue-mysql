import Vue from "vue";
import Vuex from "vuex";

// Modules
import alerts from './modules/utilities/alerts'
import snackbars from './modules/utilities/snackbars'
import toolbar from './modules/toolbar'
import userAuthentication from './modules/userAuthentication'
import users from './modules/users'
import roles from './modules/roles'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    alerts,
    snackbars,
    toolbar,
    userAuthentication,
    users,
    roles
  }
});
