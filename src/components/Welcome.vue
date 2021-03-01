<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <div class="text-md-h3 text-center">
          Los Datos que recoletamos
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="2">
        <v-img
            lazy-src="../assets/observacionpositiva.svg"
            max-width="150"
            max-height="150"
            src="../assets/observacionpositiva.svg"></v-img>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="2">
        <v-img
            lazy-src="../assets/observacionsupervision.svg"
            max-width="150"
            max-height="150"
            src="../assets/observacionsupervision.svg"></v-img>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="2">
        <v-img
            lazy-src="../assets/observacionderechos.svg"
            max-width="150"
            max-height="150"
            src="../assets/observacionderechos.svg"></v-img>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="2">
        <div class="text-md-body-1">
          Observación positiva
        </div>
        <div class="text-md-body-1">
          Fortalezas del proceso educativo
        </div>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="2">
        <div class="text-md-body-1">
          Observación de ausencia de supervisión
        </div>
        <div class="text-md-body-1">
          Devilidades del proceso relacionadas con la supervisión
          de estudiantes en su práctica clínica
        </div>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="2">
        <div class="text-md-body-1">
          Observación de respeto a derechos
        </div>
        <div class="text-md-body-1">
          Debilidades del proceso relacionadas con el trato
          digno y libre de violencia
        </div>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="text-md-h3 text-center">
          Información a la mano
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="4" align-self="end">
        <v-row>
          <v-col cols="8"></v-col>
          <v-col cols="4">
            <v-img
                lazy-src="../assets/registro.svg"
                max-width="100"
                max-height="100"
                src="../assets/registro.svg"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="8">
        <v-card-text class="text-md-body-1">
          Registro de observaciones en intervalos de tiempo.
          Visualización general o especifica, filtrada por
          universidad o institución de salud.
        </v-card-text>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="4" align-self="end">
        <v-row>
          <v-col cols="8"></v-col>
          <v-col cols="4">
            <v-img
                lazy-src="../assets/consulta.svg"
                max-width="100"
                max-height="100"
                src="../assets/consulta.svg"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="8">
        <v-card-text class="text-md-body-1">
          Consulta estadísticas basadas en el registro de
          observaciones.
          Filtrar a través de datos demográficos como edad
          y género.
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Welcome',

    data: () => ({

    }),
  })
</script>
