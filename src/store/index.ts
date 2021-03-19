import Vue from "vue";
import Vuex from "vuex";
import { server } from "@/utils/request";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    healUnits: [],
    studentsType: [],
    universities: [],
    observations: [],
    valueObservations: [
      { name: "Total de observaciones", number: 0 },
      { name: "Observaciones positivas", number: 0 },
      { name: "Observaciones por falta de supervisión", number: 0 },
      { name: "Observaciones falta de respeto a derechos", number: 0 },
      { name: "Internado", number: 0 },
      { name: "Servicio Social", number: 0 },
      { name: "Residencia", number: 0 },
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

    loadObservations: function(state: any, observationsAPI: any) {
      state.observations = [];
      state.valueObservations.forEach(function (element:any) {
        element.number = 0;
      });
      observationsAPI.forEach(function(element: any) {
        var item: any = {};
        item.healthInstitution = element.institucionSalud;
        let dateArray = element.fechaRegistro.split('T');
        let dateFormater = dateArray[0].split('-');
        let finalDate = '';
        dateFormater.forEach(function (element2:string) {
          if (finalDate.length < 8) {
            finalDate = '-' + element2 + finalDate;
          } else {
            finalDate = element2 + finalDate;
          }
        });
        item.registrationDate = finalDate;
        dateArray = element.fechaObservacion.split('T');
        dateFormater = dateArray[0].split('-');
        finalDate = '';
        dateFormater.forEach(function (element2:string) {
          if (finalDate.length < 8) {
            finalDate = '-' + element2 + finalDate;
          } else {
            finalDate = element2 + finalDate;
          }
        });
        item.observationDate = finalDate;
        dateArray = element.horaObservacion.split('T');
        dateFormater = dateArray[1].split('.');
        item.observationTime = dateFormater[0];
        switch (element.tipoObservacion) {
          case "ObservacionPositiva":
            state.valueObservations[1].number++;
            item.typeObservation = 'Positiva';
            break;
          case "ObservacionSupervision":
            state.valueObservations[2].number++;
            item.typeObservation = 'Supervisión';
            break;
          case "ObservacionDerechos":
            state.valueObservations[3].number++;
            item.typeObservation = 'Respeto a derechos';
            break;
          default:
            break;
        }
        item.typeStudent = element.tipoEstudiante;
        switch (element.tipoEstudiante) {
          case "Internado":
            state.valueObservations[4].number++;
            break;
          case "Servicio Social":
            state.valueObservations[5].number++;
            break;
          case "Residencia":
            state.valueObservations[6].number++;
            break;
          default:
            break;
        }
        state.valueObservations[0].number++;
        state.observations.push(item);
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

    getObservations: async function({ commit }) {
      try {
        const observationsAPI = await server.get("observaciones/");
        commit("loadObservations", observationsAPI.data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    /* splitString: function (date:string, separator: string, returnPosition: number): string {
      let dateArray = date.split(separator);
      return dateArray[returnPosition];
    },

    observationFormat: function name(state:any) {
      state.observations.forEach(function (element:any) {
        element.registrationDate = state.splitString(element.registrationDate, 'T', 0);
      });
    } */
  },

  modules: {},
});
