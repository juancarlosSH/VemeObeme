import Vue from "vue";
import Vuex from "vuex";
import { server } from "@/utils/request";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    healUnits: [],
    studentsType: [],
    universities: [],
    valueObservations: [
      { name: "Total de observaciones", number: 0 },
      { name: "Observaciones positivas", number: 0 },
      { name: "Observaciones por falta de supervisión", number: 0 },
      { name: "Observaciones falta de respeto a derechos", number: 0 },
    ],
  },

  mutations: {
    loadHealthUnit: function(state: any, healthUnitsAPI: any) {
      healthUnitsAPI.forEach(function(element: any) {
        state.healUnits.push(element.nombre);
      });
    },

    loadStudentsType: function(state: any, studentsTypeAPI: any) {
      studentsTypeAPI.forEach(function(element: any) {
        state.studentsType.push(element.nombre);
      });
    },

    loadUniversities: function(state: any, universitiesAPI: any) {
      universitiesAPI.forEach(function(element: any) {
        state.universities.push(element.nombre);
      });
    },
  },

  actions: {
    getHealthUnits: async function({ commit }) {
      try {
        const healthUnitsAPI = await server.get("instituciones/");
        commit("loadHealthUnit", healthUnitsAPI.data);
      } catch (error) {
        console.log(error);
      }
    },

    getStudentsType: async function({ commit }) {
      try {
        const studentsTypeAPI = await server.get("tiposestancia/");
        commit("loadStudentsType", studentsTypeAPI.data);
      } catch (error) {
        console.log(error);
      }
    },

    getUniversities: async function({ commit }) {
      try {
        const universitiesAPI = await server.get("universidades/");
        commit("loadUniversities", universitiesAPI.data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  modules: {},
});
