<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card outlined shaped>
          <div class="text-center text--primary">{{ totalObservations }}</div>
          <div class="text-center text--primary">
            Total de observaciones
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { mapState } from "vuex";

export default {
  name: "ObservationsInformation",
  data: () => ({}),

  methods: {
    ...mapState(["valueObservations"]),
  },
};
</script>

<style scoped></style>
