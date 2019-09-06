import axios from "axios";

const state = {
  roleList: []
};

const getters = {
  getRoleById: (state) => (id) => {
    return state.roleList.find(role => role.id === id);
  },
  getRoleNameById: (state) => (id) => {
    return state.roleList.find(role => role.id === id).name;
  },
  getRoleList: (state) => {
    return state.roleList;
  }
};

const actions = {
  getData({ dispatch, commit, state, rootState, getters, rootGetters }) {
    let url = `${rootState.setting.apiUrl}/role/`;
    let header = { headers: { Token: localStorage.getItem("token") } };
    return new Promise((resolve, reject) => {
      try {
        axios.get(url, header)
          .then(response => {
            commit("SET_DATA", response.data.result);
          });
      } catch (err) {
        reject(err);
      }
    });
  },
  getDataById({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
    let url = `${rootState.setting.apiUrl}/role/${payload}`;
    let header = { headers: { Token: localStorage.getItem("token") } };
    return new Promise((resolve, reject) => {
      try {
        axios
          .get(url, header)
          .then(response => {
            resolve(response);
          });
      } catch (err) {
        reject(err);
      }
    });
  },
  saveData({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
    let url = `${rootState.setting.apiUrl}/role/create`;
    let header = { headers: { Token: localStorage.getItem("token") } };
    return new Promise((resolve, reject) => {
      try {
        let obj = {
          name: payload.name,
          description: payload.description
        };

        axios
          .post(url, obj, header)
          .then(response => {
            commit("ADD_DATA", response.data.result);
            resolve(response);
          });
      } catch (err) {
        reject(err);
      }
    });
  },
  updateData({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
    let url = `${rootState.setting.apiUrl}/role/update/${payload.id}`;
    let header = { headers: { Token: localStorage.getItem("token") } };
    return new Promise((resolve, reject) => {
      try {
        let obj = {
          name: payload.name,
          description: payload.description
        };

        axios
          .put(url, obj, header)
          .then(response => {
            commit("UPDATE_DATA", response.data.result);
            resolve(response);
          });
      } catch (err) {
        reject(err);
      }
    });
  },
  deleteData({ dispatch, commit, state, rootState, getters, rootGetters }, payload) {
    let url = `${rootState.setting.apiUrl}/role/delete/${payload}`;
    let header = { headers: { Token: localStorage.getItem("token") } };
    return new Promise((resolve, reject) => {
      try {
        axios
          .put(url, '', header)
          .then(response => {
            commit("DELETE_DATA", payload);
            resolve(response);
          });
      } catch (err) {
        reject(err);
      }
    });
  }
};

const mutations = {
  SET_DATA(state, payload) {
    state.roleList = payload;
  },
  ADD_DATA(state, payload) {
    state.roleList.push(payload);
  },
  UPDATE_DATA(state, payload) {
    let index = state.roleList.map(role => role.id).indexOf(payload.id);
    Object.assign(state.roleList[index], {
      name: payload.name,
      description: payload.description
    });
  },
  DELETE_DATA(state, payload) {
    let index = state.roleList.map(role => role.id).indexOf(payload);
    state.roleList.splice(index, 1);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
