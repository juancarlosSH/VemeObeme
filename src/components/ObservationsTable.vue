<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "ObservationsTable",
  data: () => ({
    headers: [
      {
        text: 'Institución de Salud',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Fecha de observación', value: 'calories' },
      { text: 'Fecha de ocurrencia', value: 'fat' },
      { text: 'Hora de ocurrencia', value: 'carbs' },
      { text: 'Tipo de observación', value: 'protein' },
      { text: 'Tipo de estudiante', value: 'iron' },
    ],
  }),
}
</script>

<style scoped>

</style>