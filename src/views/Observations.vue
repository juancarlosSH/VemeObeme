<template>
  <v-container fluid>
    <v-row>
      <v-col cols="10">
        <div class="text-md-h4 text-start">
          Observaciones
        </div>
      </v-col>
      <v-col cols="2">
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="8" align-self="end">
            <v-btn depressed text>
              Imprimir
              <v-img
                  lazy-src="../assets/pdf.svg"
                  max-height="20"
                  max-width="20"
                  src="../assets/pdf.svg"
              ></v-img>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="d-print-block pa-1 grey lighten-1 accent-4"></div>
      </v-col>
    </v-row>
    <v-row>
      <ObservationsHeader></ObservationsHeader>
    </v-row>
    <v-row>
      <v-col cols="10">
        <ObservationsTable></ObservationsTable>
      </v-col>
      <v-col cols="2">
        <ObservationsInformation></ObservationsInformation>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import ObservationsHeader from "@/components/ObservationsHeader.vue";
import ObservationsInformation from "@/components/ObservationsInformation.vue";
import ObservationsTable from "@/components/ObservationsTable.vue";

export default Vue.extend({
  name: 'Observations',
  components: {
    ObservationsHeader,
    ObservationsTable,
    ObservationsInformation,
  },
});
</script>