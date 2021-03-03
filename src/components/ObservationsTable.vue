<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="observations"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {server} from '@/utils/request';

export default {
  name: "ObservationsTable",
  data () {
    return {
      headers: [
        { text: 'Institucion de Salud', value: 'healthInstitution'},
        { text: 'Fecha de registro', value: 'registrationDate' },
        { text: 'Fecha de observación', value: 'observationDate' },
        { text: 'Hora de observación', value: 'observationTime' },
        { text: 'Tipo de observación', value: 'typeObservation' },
        { text: 'Tipo de estudiante', value: 'typeStudent'},
      ],
      observations: [],
    }
  },
  created() {
    this.getObservations();
  },
  methods: {
    async getObservations(){
      try {
        const observations = await server.get('observaciones/');
        if(observations.data.length !== 0){
          await observations.data.forEach(element => {
            let item = {};
            item.healthInstitution = element.institucionSalud;
            item.registrationDate = element.fechaRegistro;
            item.observationDate = element.fechaObservacion;
            item.observationTime = element.horaObservacion;
            item.typeObservation = element.tipoObservacion;
            item.typeStudent = element.tipoEstudiante;
            this.observations.push(item);
          })
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