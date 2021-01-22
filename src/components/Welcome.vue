<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <div class="text-md-h4 text-center">
          Los Datos que recoletamos
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" align-self="center">
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="4">
            <v-img
                lazy-src="../assets/observacionpositiva.svg"
                max-width="125"
                max-height="125"
                src="../assets/observacionpositiva.svg"
            ></v-img>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
        <v-row>
          <v-col align-self="center">
            <div class="text-center">
              <p class="text-md-body-2">
                Observación positiva
              </p>
              <p class="text-md-body-2">
                Fortalezas del proceso educativo
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" align-self="center">
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="4">
            <v-img
                lazy-src="../assets/observacionsupervision.svg"
                max-width="125"
                max-height="125"
                src="../assets/observacionsupervision.svg"
            ></v-img>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
        <v-row>
          <v-col align-self="center">
            <div class="text-center">
              <p class="text-md-body-2">
                Observación de ausencia de supervisión
              </p>
              <p class="text-md-body-2">
                Devilidades del proceso relacionadas con la supervisión
                de estudiantes en su práctica clínica
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="4">
            <v-img
                lazy-src="../assets/observacionderechos.svg"
                max-width="125"
                max-height="125"
                src="../assets/observacionderechos.svg"
            ></v-img>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
        <v-row>
          <v-col align-self="center">
            <div class="text-center">
              <p class="text-md-body-2">
                Observación de respeto a derechos
              </p>
              <p class="text-md-body-2">
                Debilidades del proceso relacionadas con el trato
                digno y libre de violencia
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="text-md-h4 text-center">
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
        <v-card-text class="text--primary">
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
        <v-card-text class="text--primary">
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
