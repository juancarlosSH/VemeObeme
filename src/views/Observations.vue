<template>
  <div>
    <v-row>
      <v-col cols="8">
        <h1 class="font-weight-medium text-md-h4 pa-5">Observaciones</h1>
      </v-col>
      <v-col cols="4" class="d-flex justify-end align-center pr-10">
        <v-btn color="green lighten-1">CSV
          <v-img
            lazy-src="@/assets/download.png" max-width="32" max-height="32" src="@/assets/download.png"
          ></v-img>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <ObservationsHeader></ObservationsHeader>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="9">
        <ObservationsTable></ObservationsTable>
      </v-col>
      <v-col cols="3">
        <ObservationsInformation></ObservationsInformation>
      </v-col>
    </v-row>
  </div>
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