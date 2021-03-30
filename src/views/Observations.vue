<template>
  <div>
    <v-row>
      <v-col cols="8">
        <h2 class="font-weight-medium text-md-h4 pa-5">Observaciones</h2>
      </v-col>
      <v-col cols="4" class="d-flex justify-end align-center pr-10">
        <v-btn color="green lighten-1" @click="download_csv"
          >CSV
          <v-img
            lazy-src="@/assets/download.png"
            max-width="32"
            max-height="32"
            src="@/assets/download.png"
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
      <v-col cols="12">
        <ObservationsTable></ObservationsTable>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import ObservationsHeader from "@/components/ObservationsHeader.vue";
import ObservationsInformation from "@/components/ObservationsInformation.vue";
import ObservationsTable from "@/components/ObservationsTable.vue";

export default Vue.extend({
  name: "Observations",

  components: {
    ObservationsHeader,
    ObservationsTable,
  },

  data() {
    return {};
  },

  methods: {
    download_csv: function() {
      var csv = "";
      this.observations.forEach(function(row: any) {
        csv += row.healthInstitution + ",";
        csv += row.registrationDate + ",";
        csv += row.observationDate + ",";
        csv += row.observationTime + ",";
        csv += row.typeObservation + ",";
        csv += row.typeStudent + ",";
        csv += "\n";
      });
      var hiddenElement = document.createElement("a");
      hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
      hiddenElement.target = "_blank";
      hiddenElement.download = "observations.csv";
      hiddenElement.click();
    },
  },

  computed: {
    ...mapState(["observations"]),
  },
});
</script>
