<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card
          outlined
          shaped
        >
          <div class="text-center text--primary">{{totalStudents}}</div>
          <div class="text-center text--primary">
            Total de estudiantes registrados
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card
          outlined
          shaped
        >
          <div class="text-center text--primary">{{observationStudents}}</div>
          <div class="text-center text--primary">
            Total de estudiantes registrados
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card
          outlined
          shaped
        >
          <div class="text-center text--primary">{{totalObservations}}</div>
          <div class="text-center text--primary">
            Total de estudiantes registrados
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card
          outlined
          shaped
        >
          <div class="text-center text--primary">{{positiveObservations}}</div>
          <div class="text-center text--primary">
            Total de estudiantes registrados
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card
          outlined
          shaped
        >
          <div class="text-center text--primary">{{supervisoryObservations}}</div>
          <div class="text-center text--primary">
            Total de estudiantes registrados
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card
          outlined
          shaped
        >
          <div class="text-center text--primary">{{rightsObservations}}</div>
          <div class="text-center text--primary">
            Total de estudiantes registrados
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "ObservationsInformation",
  data: () => ({
    totalStudents: 80,
    observationStudents: 60,
    totalObservations: 80,
    positiveObservations: 30,
    supervisoryObservations: 35,
    rightsObservations: 15,
  }),
}
</script>

<style scoped>

</style>