<template>
  <div>
    <v-card flat color="green lighten-4">
      <v-row>
        <v-col cols="8">
          <v-card-title>
            <h2 class="font-weight-regular">¡Bienvenido a Veme Obeme!</h2>
          </v-card-title>
          <v-card-text class="text-justify font-weight-regular pa-4 text-md-h6">
            <p>
              Aquí encontraras el registro de las observaciones realizadas por
              internos, pasantes y residentes de medicina, sobre el proceso
              educativo en las unidades de salud en México. Si cursas el
              internado médico, el servicio social o la residencia y deseas
              opinar sobre las fortalezas y oportunidades de la educación médica
              en las unidades de salud de México, te invitamos a colaborar con
              nosotros a través de la aplicación móvil.
            </p>
          </v-card-text>
          <v-card-actions class="px-5">
            <v-btn :to="{ name: 'Downloads' }" color="green lighten-2">
              Descarga la aplicación móvil
            </v-btn>
          </v-card-actions>
        </v-col>
        <v-col cols="4" class="d-flex flex-row-reverse">
          <v-img
            lazy-src="../assets/InicioCel.png"
            max-width="400"
            max-height="400"
            src="../assets/InicioCel.png"
          ></v-img>
        </v-col>
      </v-row>
    </v-card>
    <v-row>
      <v-col cols="12">
        <h2 class="font-weight-regular text-md-h3 text-center py-5">
          Los datos que recolectamos
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" class="d-flex justify-center">
        <v-img
          lazy-src="@/assets/observacionpositiva.svg"
          max-width="150"
          max-height="150"
          src="@/assets/observacionpositiva.svg"
        ></v-img>
      </v-col>
      <v-col cols="4" class="d-flex justify-center">
        <v-img
          lazy-src="@/assets/observacionsupervision.svg"
          max-width="150"
          max-height="150"
          src="@/assets/observacionsupervision.svg"
        ></v-img>
      </v-col>
      <v-col cols="4" class="d-flex justify-center">
        <v-img
          lazy-src="@/assets/observacionderechos.svg"
          max-width="150"
          max-height="150"
          src="@/assets/observacionderechos.svg"
        ></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" class="text-center">
        <p class="font-weight-regular pt-4 text-md-h6">Observación positiva</p>
        <p class="font-weight-regular text-md-h6">
          Fortalezas del proceso educativo
        </p>
      </v-col>
      <v-col cols="4" class="text-center">
        <p class="font-weight-regular pt-4 text-md-h6">
          Observación de ausencia de supervisión
        </p>
        <p class="font-weight-regular text-md-h6">
          Debilidades del proceso relacionadas con la supervisión de estudiantes
          en su práctica clínica
        </p>
      </v-col>
      <v-col cols="4" class="text-center">
        <p class="font-weight-regular pt-4 text-md-h6">
          Observación de respeto a derechos
        </p>
        <p class="font-weight-regular text-md-h6">
          Debilidades del proceso relacionadas con el trato digno y libre de
          violencia
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 class="font-weight-regular text-md-h3 text-center py-5">
          Información a la mano
        </h2>
      </v-col>
    </v-row>
    <v-row class="pt-6">
      <v-col cols="4" class="d-flex flex-row-reverse">
        <v-img
          lazy-src="@/assets/registro.svg"
          max-width="100"
          max-height="100"
          src="@/assets/registro.svg"
        ></v-img>
      </v-col>
      <v-col cols="8" class="d-flex align-center">
        <p class="text-justify font-weight-regular pr-15 text-md-h6">
          Registro de observaciones en intervalos de tiempo. Visualización
          general o específica, filtrada por universidad o institución de salud.
        </p>
      </v-col>
    </v-row>
    <v-row class="py-10">
      <v-col cols="4" class="d-flex flex-row-reverse">
        <v-img
          lazy-src="@/assets/consulta.svg"
          max-width="100"
          max-height="100"
          src="@/assets/consulta.svg"
        ></v-img>
      </v-col>
      <v-col cols="8" class="d-flex justify-start flex-column">
        <p class="font-weight-regular text-md-h6">
          Consulta estadísticas basadas en el registro de observaciones.
        </p>
        <p class="font-weight-regular text-md-h6">
          Filtrar a través de datos demográficos como edad y género.
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
});
</script>
