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
import Vue from "vue";
import { mapState, mapActions } from "vuex";

export default Vue.extend({
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
    };
  },

  methods: {
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

  computed: {
    ...mapState(["observations"]),
    ...mapActions(["getObservations"]),
  },

  mounted() {
    this.getObservations;
  },
});
</script>
