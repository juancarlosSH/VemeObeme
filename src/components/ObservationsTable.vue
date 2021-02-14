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
import {server} from '@/utils/request';

export default {
  name: "ObservationsTable",
  data: () => ({
    headers: [
      { text: 'Institución de Salud'},
      { text: 'Fecha de observación'},
      { text: 'Fecha de ocurrencia'},
      { text: 'Hora de ocurrencia'},
      { text: 'Tipo de observación'},
      { text: 'Tipo de estudiante'},
    ],
    observations:[],
  }),
  created() {
    this.getObservations();
  },
  methods: {
    getColor (observationType:string) {
      if (observationType == "Positiva") return '#66BB6A'
      else if (observationType == "Observación") return '#FFF176'
      else return '#EF5350'
    },
    async getObservations(){
      try {
        const observations = await server.get('obemeapi/v1/observaciones/');
        if(observations.data.length !== 0){
          console.log('Tienes observaciones');
          /*await observations.data.forEach(element => {
            let item = {};
            this.observations.push(item);
          })*/
        }else{
          console.log('No tienes observaciones');
        }
      }catch (error){
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>

</style>