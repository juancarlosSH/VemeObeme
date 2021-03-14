<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-data-table :headers="headers" :items="observations">
          <template v-slot:item.typeObservation="{ item }">
            <v-chip :color="getColor(item.typeObservation)" dark>
              {{ item.typeObservation }}
            </v-chip>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Vuex from 'vuex';

export default {
  name: "ObservationsTable",

  data() {
    return {
      headers: [
        { text: "Institucion de Salud", value: "healthInstitution" },
        { text: "Fecha de registro", value: "registrationDate" },
        { text: "Fecha de observación", value: "observationDate" },
        { text: "Hora de observación", value: "observationTime" },
        { text: "Tipo de observación", value: "typeObservation" },
        { text: "Tipo de estudiante", value: "typeStudent" },
      ],
      observations: [],
    };
  },

  methods: {
    /* async getObservations() {
      try {
        const observations = await server.get("observaciones/");
        if (observations.data.length !== 0) {
          await observations.data.forEach((element) => {
            let item = {};
            item.healthInstitution = element.institucionSalud;
            item.registrationDate = this.orderDate(
              this.separateString(element.fechaRegistro, "T", 0)
            );
            item.observationDate = this.orderDate(
              this.separateString(element.fechaObservacion, "T", 0)
            );
            item.observationTime = this.separateString(
              this.separateString(element.horaObservacion, "T", 1),
              ".",
              0
            );
            item.typeObservation = this.observationTypeFormat(
              element.tipoObservacion
            );
            item.typeStudent = element.tipoEstudiante;
            this.observations.push(item);
          });
        } else {
          console.log("No tienes observaciones");
        }
      } catch (error) {
        console.log(error);
      }
    }, */

    separateString(
      fullDate: string,
      separator: string,
      returnPosition: number
    ): string {
      var datePortion = fullDate.split(separator);
      return datePortion[returnPosition];
    },

    orderDate(date: string): string {
      var auxiliarDate = date.split("-");
      console.log(auxiliarDate);
      var orderedDate = "";
      auxiliarDate.forEach((element) => {
        if (orderedDate.length !== 8) {
          orderedDate = "-" + element + orderedDate;
        } else {
          orderedDate = element + orderedDate;
        }
      });
      return orderedDate;
    },

    observationTypeFormat(typeObservation: string): string {
      var finalType = "";
      if (typeObservation === "ObservacionPositiva") {
        finalType = "Positiva";
      } else {
        if (typeObservation === "ObservacionSupervision") {
          finalType = "Supervisión";
        } else {
          finalType = "Respeto a derechos";
        }
      }
      return finalType;
    },

    getColor(typeObservation: string): string {
      var color = "";
      if (typeObservation === "Positiva") {
        color = "#81C784";
      } else {
        if (typeObservation === "Supervisión") {
          color = "#FBC02D";
        } else {
          color = "#EF5350";
        }
      }
      return color;
    },
  },
};
</script>