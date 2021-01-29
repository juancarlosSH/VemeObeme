<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="observations"
          hide-default-footer
        >
          <template v-slot:item.observationType="{item}">
            <v-chip
              :color="getColor(item.observationType)"
              dark
            >
              {{item.observationType}}
            </v-chip>
          </template>
        </v-data-table>
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
      { text: 'Fecha de observación'},
      { text: 'Fecha de ocurrencia'},
      { text: 'Hora de ocurrencia'},
      { text: 'Tipo de observación'},
      { text: 'Tipo de estudiante'},
    ],
    observations:[],
  }),
  methods: {
    getColor (observationType:string) {
      if (observationType == "Positiva") return '#66BB6A'
      else if (observationType == "Observación") return '#FFF176'
      else return '#EF5350'
    }
  }
}
</script>

<style scoped>

</style>