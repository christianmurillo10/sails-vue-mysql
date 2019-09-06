
import configuration from '../../../config/configuration'

const state = {
  apiUrl: configuration.apiUrl
};

const getters = {};

const actions = {};

const mutations = {
  // setUrlData(state, payload) {
  //   state.apiUrl = payload.apiUrl;
  // }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
